import React, {useState} from "react";
import {Button} from "@mui/material";
import BorderedSection from "../borderSection";

const styles = {
    button: {
        margin: '2px',
        borderRadius: '100px',
        fontSize: '0.8em',
    }
}

function CheckBoxButton(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    }

    return (<Button color="secondary" style={styles.button} variant={isChecked ? "contained" : "outlined"}
                    onClick={handleCheckBoxChange}>{props.text}</Button>)
}

function CustomCheckBox(props) {
    return (<BorderedSection title={props.checkBoxLabel}>
        <div>{props.buttonsText?.map(button => {
            return <CheckBoxButton text={button}/>
        })}</div>
    </BorderedSection>)
}

export default CustomCheckBox;