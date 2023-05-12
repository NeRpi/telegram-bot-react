import React, {useState} from "react";
import {Button} from "@mui/material";
import BorderedSection from "../borderSection";
import useTelegram from "../../hooks/useTelegram";

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
        props?.onMount(props?.text);
    }

    return (<Button color="secondary" style={styles.button} variant={isChecked ? "contained" : "outlined"}
                    onClick={handleCheckBoxChange}>{props.text}</Button>)
}

function CustomCheckBox(props) {
    let selectButtons = props?.buttonsText.reduce((result, key) => {
        result[key] = false;
        return result;
    }, {});
    const {setData} = useTelegram();

    function buttonOnMount(text) {
        selectButtons[text] = !selectButtons[text];
        const result = Object.keys(selectButtons).map((key, index) => {
                if (selectButtons[key]) return index;
            }
        ).filter(index => index !== undefined);
        setData({[props?.keyData]: result})
    }

    return (<BorderedSection title={props.checkBoxLabel}>
        <div>{props.buttonsText?.map(button => {
            return <CheckBoxButton text={button} onMount={buttonOnMount}/>
        })}</div>
    </BorderedSection>)
}

export default CustomCheckBox;