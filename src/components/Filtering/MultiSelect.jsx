import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const counts = [1, 2, 3, 4, 5];

function getStyles(name, counts, theme) {
  return {
    fontWeight:
      counts.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [countRooms, setCountRooms] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountRooms(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ width: "16em" }}>
        <InputLabel id="demo-multiple-name-label">Количество комнат</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={countRooms}
          onChange={handleChange}
          input={<OutlinedInput label="Количество комнат" />}
          MenuProps={MenuProps}
        >
          {counts.map((count) => (
            <MenuItem
              key={count}
              value={count}
              style={getStyles(count, countRooms, theme)}
            >
              {count}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
