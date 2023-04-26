import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import $ from "jquery";

export default function Location() {
  const [inputValue, setInputValue] = React.useState("");
  const [locations, setLocations] = React.useState([]);

  const handleInputChange = (event, value) => {
    setInputValue(value);
    $.ajax({
      type: "GET",
      url: `https://suggest-maps.yandex.ru/suggest-geo?part=Беларусь ${value}&lang=ru_RU&search_type=tp&v=5&origin=jsapi2Geocoder&n=10&type=city`,
      dataType: "jsonp",
      jsonp: "callback",
      success: (response) => {
        const items = response[1];
        setLocations(
          items.map((element) => {
            return element[1];
          })
        );
      },
    });
  };

  return (
    <Autocomplete
      disablePortal
      id="location"
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={locations}
      sx={{ width: "16em", marginBottom: "8px" }}
      renderInput={(params) => <TextField {...params} label="location" />}
    />
  );
}
