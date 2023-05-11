import React, {useState} from "react";
import {Select, FormControl, MenuItem} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

function SelectRange(props) {
    const [minSquare, setMinSquare] = useState(props.placeholders[0]);
    const [maxSquare, setMaxSquare] = useState(props.placeholders[1]);
    const values = props.values;
    const [maxValues, setMaxValues] = useState(values);
    const [minValues, setMinValues] = useState(values);

    function handleMinPriceChange(event) {
        setMinSquare(event.target.value);
        setMaxValues(values.slice(values.indexOf(event.target.value) + 1));
    }

    function handleMaxPriceChange(event) {
        setMaxSquare(event.target.value);
        setMinValues(values.slice(0, values.indexOf(event.target.value)));
    }

    return (
        <div>
            <FormControl sx={{marginTop: '10px', minWidth: '45vw'}}>
                <InputLabel color="secondary" id="demo-simple-select-autowidth-label">{props.title}</InputLabel>
                <Select style={{borderBottomRightRadius: "0px", borderTopRightRadius: "0px"}} value={minSquare}
                        color="secondary"
                        onChange={handleMinPriceChange}
                        label={props.title}>
                    <MenuItem value={props.placeholders[0]}>{props.placeholders[0]}</MenuItem>
                    {minValues.map(value => <MenuItem value={value}>{value}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{marginTop: '10px', minWidth: '45vw'}}>
                <Select style={{borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px"}} value={maxSquare}
                        color="secondary"
                        onChange={handleMaxPriceChange}>
                    <MenuItem value={props.placeholders[1]}>{props.placeholders[1]}</MenuItem>
                    {maxValues.map(value => <MenuItem value={value}>{value}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectRange;