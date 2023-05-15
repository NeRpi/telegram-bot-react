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

function CheckBoxButton({text, onMount}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
        onMount(text);
    }

    return (<Button color="secondary" style={styles.button} variant={isChecked ? "contained" : "outlined"}
                    onClick={handleCheckBoxChange}>{text}</Button>)
}

function CustomCheckBox({keyData, buttonsText, typeBox, checkBoxLabel}) {
    let selectButtons = buttonsText.reduce((result, key, index) => {
        if (Array.isArray(key))
            result[key[0]] = {selected: false, value: key[1]};
        else
            result[key] = {selected: false, value: index + 1};
        return result;
    }, {});
    const {setData} = useTelegram();

    function buttonOnMount(text) {
        selectButtons[text].selected = !selectButtons[text].selected;
        const messageValues = Object.keys(selectButtons).filter(key => selectButtons[key].selected);
        const urlValues = messageValues.map(key => selectButtons[key].value)

        if (messageValues.length === 0) {
            setData({[keyData]: null})
        } else {
            setData({
                [keyData]: {
                    fieldValue: checkBoxLabel,
                    messageValue: messageValues.join(', '),
                    urlValue: `${keyData}=v.${typeBox}:` + urlValues.join(',')
                }
            })
        }
    }

    return (<BorderedSection title={checkBoxLabel}>
        <div>{buttonsText?.map(button => {
            return <CheckBoxButton text={Array.isArray(button) ? button[0] : button} onMount={buttonOnMount}/>
        })}</div>
    </BorderedSection>)
}

export default CustomCheckBox;