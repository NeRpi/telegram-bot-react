import React, {useState} from "react";
import {TextField} from "@mui/material";
import useTelegram from "../../hooks/useTelegram";

function PriceRangeInput(props) {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [error, setError] = useState(false);
    const {setData} = useTelegram();

    function handleMinPriceChange(event) {
        setMinPrice(event.target.value);
        if (event.target.value > maxPrice) {
            setError(true);
        } else {
            setError(false);
            setData({[props?.key]: [event.target.value, maxPrice]});
        }
    }

    function handleMaxPriceChange(event) {
        setMaxPrice(event.target.value);
        if (event.target.value < minPrice) {
            setError(true);
        } else {
            setError(false);
            setData({[props?.keyData]: [minPrice, event.target.value]});
        }
    }

    return (
        <div>
            <TextField
                color="secondary"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "8px 0px 0px 8px",
                        width: "45vw",
                        marginTop: '10px'
                    },
                    "& .MuiInputLabel-root": {
                        marginTop: '10px'
                    }
                }}
                label="Цена"
                type="number"
                InputLabelProps={{shrink: true}}

                value={minPrice}
                onChange={handleMinPriceChange}
                placeholder="От"
                error={error}
            />
            <TextField
                color="secondary"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "0px 8px 8px 0px",
                        width: "45vw",
                        marginTop: '10px'
                    },
                }}
                type="number"
                InputLabelProps={{shrink: true}}
                variant="outlined"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                placeholder="До"
                error={error}
            />
        </div>
    );
}

export default PriceRangeInput;
