import React, {useState} from "react";
import {Select, FormControl, MenuItem} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import useTelegram from "../../hooks/useTelegram";

function SelectRange({keyData, title, values, placeholders}) {
    const [minSquare, setMinSquare] = useState(placeholders[0]);
    const [maxSquare, setMaxSquare] = useState(placeholders[1]);
    const [maxValues, setMaxValues] = useState(values);
    const [minValues, setMinValues] = useState(values);
    const {setData} = useTelegram();

    function handleMinPriceChange(event) {
        setMinSquare(event.target.value);
        setMaxValues(values.slice(values.indexOf(event.target.value) + 1));
        if (isNaN(event.target.value) && isNaN(maxValues)) {
            setData({[keyData]: null});
        } else {
            setData({
                [keyData]: {
                    fieldValue: title,
                    messageValue: (event.target.value !== '' ? `от ${event.target.value} ` : '') + (maxSquare !== '' ? `до ${maxSquare} ` : '') + 'м2',
                    urlValue: `${keyData}=r:${!isNaN(event.target.value) ? event.target.value : 0},${!isNaN(maxSquare) ? maxSquare : 10000}`
                }
            });
        }
    }

    function handleMaxPriceChange(event) {
        setMaxSquare(event.target.value);
        setMinValues(values.slice(0, values.indexOf(event.target.value)));
        if (isNaN(minSquare) && isNaN(event.target.value)) {
            setData({[keyData]: null});
        } else {
            setData({
                [keyData]: {
                    fieldValue: title,
                    messageValue: (minSquare !== '' ? `от ${minSquare} ` : '') + (event.target.value !== '' ? `до ${event.target.value} ` : '') + 'м2',
                    urlValue: `${keyData}=r:${!isNaN(minSquare) ? minSquare : 0},${!isNaN(event.target.value) ? event.target.value : 10000}`
                }
            });
        }
    }

    return (
        <div>
            <FormControl sx={{marginTop: '10px', marginLeft: '10px', minWidth: '45vw'}}>
                <InputLabel color="secondary" id="demo-simple-select-autowidth-label">{title}</InputLabel>
                <Select style={{borderBottomRightRadius: "0px", borderTopRightRadius: "0px"}} value={minSquare}
                        color="secondary"
                        onChange={handleMinPriceChange}
                        label={title}>
                    <MenuItem value={placeholders[0]}>{placeholders[0]}</MenuItem>
                    {minValues.map(value => <MenuItem value={value}>{value}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{marginTop: '10px', minWidth: '45vw'}}>
                <Select style={{borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px"}} value={maxSquare}
                        color="secondary"
                        onChange={handleMaxPriceChange}>
                    <MenuItem value={placeholders[1]}>{placeholders[1]}</MenuItem>
                    {maxValues.map(value => <MenuItem value={value}>{value}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectRange;