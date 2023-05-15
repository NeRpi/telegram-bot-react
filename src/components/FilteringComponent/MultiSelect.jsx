import * as React from "react";
import {OutlinedInput, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import useTelegram from "../../hooks/useTelegram";

export default function MultipleSelect({keyData, title, values}) {
    const [countRooms, setCountRooms] = React.useState([]);
    const {setData} = useTelegram();

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setCountRooms(typeof value === "string" ? value.split(",") : value);
        if (value.length === 0) {
            setData({[keyData]: null});
        } else {
            setData({
                [keyData]: {
                    fieldValue: title,
                    messageValue: value.sort().map(val => Array.isArray(val) ? val[0] : val).join(', '),
                    urlValue: `${keyData}=v.or:` + value.join(',')
                }
            });
        }
    }

    return (
        <div>
            <FormControl color="secondary" sx={{width: "90vw", marginLeft: '10px', marginTop: "10px"}}>
                <InputLabel id="demo-multiple-name-label">{title}</InputLabel>
                <Select
                    multiple
                    value={countRooms}
                    onChange={handleChange}
                    input={<OutlinedInput label={title}/>}>
                    {values.map((val) => (
                        <MenuItem
                            value={Array.isArray(val) ? val[1] : val}>{Array.isArray(val) ? val[0] : val}
                        </MenuItem>))}
                </Select>
            </FormControl>
        </div>
    )
}
