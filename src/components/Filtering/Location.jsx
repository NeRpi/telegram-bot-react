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
            url: `https://suggest-maps.yandex.ru/suggest-geo?v=5&search_type=tp&part=Беларусь ${value}&lang=ru_RU&n=10&origin=jsapi2Geocoder&bbox=23.178322%2C51.262035%2C32.776533%2C56.171728&local_only=1`,
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
            id="Местроположение"
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={locations}
            sx={{width: "90vw", marginTop: '10px'}}
            renderInput={(params) => <TextField color="secondary" {...params} label="Местроположение"/>}
        />
    );
}
