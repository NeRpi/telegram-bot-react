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
        if (event.target.value > maxPrice && maxPrice !== '') {
            setError(true);
        } else {
            setError(false);
            if (maxPrice === '' && event.target.value === '') {
                setData({[props?.keyData]: null});
            } else {
                setData({
                    [props?.keyData]: {
                        fieldValue: "Цена",
                        messageValue: (event.target.value !== '' ? `от ${event.target.value} ` : '') + (maxPrice !== '' ? `до ${maxPrice} ` : '') + 'Бел.руб',
                        urlValue: `prc=r:${event.target.value}00,${maxPrice !== '' ? maxPrice : 10000000}00`
                    }
                });
            }
        }
    }

    function handleMaxPriceChange(event) {
        setMaxPrice(event.target.value);
        if (event.target.value < minPrice) {
            setError(true);
            setData({[props?.keyData]: null});
        } else {
            setError(false);
            if (minPrice === '' && event.target.value === '') {
                setData({[props?.keyData]: null});
            } else {
                setData({
                    [props?.keyData]: {
                        fieldValue: "Цена",
                        messageValue: (minPrice !== '' ? `от ${minPrice} ` : '') + (event.target.value !== '' ? `до ${event.target.value} ` : '') + 'Бел.руб',
                        urlValue: `&prc=r:${minPrice}00,${event.target.value !== '' ? event.target.value : 10000000}00`
                    }
                });
            }
        }
    }

    return (
        <div>
            <TextField
                color="secondary"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "8px 0px 0px 8px",
                        width: "40vw",
                        marginTop: '10px',
                    },
                    "& .MuiInputLabel-root": {
                        marginTop: '10px',
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
                        width: "40vw",
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
