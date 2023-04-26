import React, { useState } from "react";
import { TextField } from "@mui/material";

function PriceRangeInput() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState(false);

  function handleMinPriceChange(event) {
    setMinPrice(event.target.value);
    if (event.target.value > maxPrice) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
    if (event.target.value < minPrice) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div>
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px 0px 0px 8px",
            width: "8em",
          },
        }}
        label="Цена"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        value={minPrice}
        onChange={handleMinPriceChange}
        placeholder="From"
        error={error}
      />
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0px 8px 8px 0px",
            width: "8em",
          },
        }}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        placeholder="To"
        error={error}
      />
    </div>
  );
}

export default PriceRangeInput;
