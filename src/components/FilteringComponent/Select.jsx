import * as React from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import useTelegram from "../../hooks/useTelegram";

export default function CustomSelect({values, keyData, title, onChange}) {
    const texts = values?.map(val => Array.isArray(val) ? val[0] : val);
    const textValues = values?.map((val, index) => Array.isArray(val) ? val[1] : index);
    const [houseType, setHouseType] = React.useState(textValues ? textValues[0] : '');
    const {setData} = useTelegram();

    const handleChange = (event) => {
        setHouseType(event.target.value);
        setData({
            [keyData]: {
                fieldValue: title,
                messageValue: texts[textValues.indexOf(event.target.value)],
                urlValue: `${keyData}=${event.target.value}`
            }
        });
        if (onChange) onChange(event.target.value);
    };

    return (
        <div>
            <FormControl color="secondary" sx={{marginTop: '10px', width: '80vw'}}>
                <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
                <Select value={houseType} onChange={handleChange} label={title}>
                    {texts?.map((val, index) => {
                        return <MenuItem value={textValues[index]}>{val}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}