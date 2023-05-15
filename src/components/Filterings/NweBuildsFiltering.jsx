import React from "react";
import "./Filtering.css";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";
import MultipleSelect from "../FilteringComponent/MultiSelect";

const NewBuildFiltering = () => {
    return (
        <div>
            <SelectRange keyData={'saa'} placeholders={['От', 'До']} title={"Площадь учатска, сот."}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40]}/>
            <MultipleSelect keyData={'nwbnf'} title="Этажность дома"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), ['более 30', 30]]}/>
            <CustomCheckBox keyData={'flch'} checkBoxLabel="Высота потолков" typeBox={'or'}
                            buttonsText={["от 2,5м", ["от 2.7м", 5], ["от 3м", 10], ["от 3.5м", 15], ["от 4м", 20]]}/>
            <CustomCheckBox keyData={'hst'} checkBoxLabel="Материал стен" typeBox={'or'}
                            buttonsText={["Панельный", "Монолитный", "Кирпичный", "Блочный", "Каркасный", ["Каркасно-блочный", 10]]}/>
        </div>
    );
};

export default NewBuildFiltering;
