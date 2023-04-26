import * as React from "react";
import {OutlinedInput, InputLabel, MenuItem, FormControl, Select} from "@mui/material";

export default function MultipleSelect(props) {
    const [countRooms, setCountRooms] = React.useState([]);

    const handleChange = (event) => {
        const {target: {value}} = event;
        setCountRooms(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <div>
            <FormControl color="secondary" sx={{width: "80vw", marginTop: '10px'}}>
                <InputLabel id="demo-multiple-name-label">{props.title}</InputLabel>
                <Select
                    multiple value={countRooms} onChange={handleChange}
                    input={<OutlinedInput label={props.title}/>}>
                    {props.values.map((count) => (<MenuItem value={count}>{count}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}
