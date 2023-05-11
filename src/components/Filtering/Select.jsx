import * as React from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material';

export default function CustomSelect() {
    const [houseType, setHouseType] = React.useState(1);

    const handleChange = (event) => {
        setHouseType(event.target.value);
    };

    return (
        <div>
            <FormControl color="secondary" sx={{marginTop: '10px', width: '90vw'}}>
                <InputLabel id="demo-simple-select-autowidth-label">Тип жилья</InputLabel>
                <Select value={houseType} onChange={handleChange} label="Тип жилья">
                    <MenuItem value={1}>Квартиры</MenuItem>
                    <MenuItem value={2}>Дома и котеджи</MenuItem>
                    <MenuItem value={3}>Комнаты</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}