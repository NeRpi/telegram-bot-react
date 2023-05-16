import React from "react";
import "./Filtering.css";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";

const SiteFiltering = () => {
    return (
        <div className={"filtering-type"}>
            <SelectRange keyData={'saa'} placeholders={['От', 'До']} title={"Площадь учатска, сот."}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40]}/>
            <CustomCheckBox keyData={'rwtr'} checkBoxLabel="Вода" typeBox={'or'}
                            buttonsText={["Сезонная", ["Скважина", 5], ["Колодец", 10], ["Центральная", 15], ["Отсутсвует", 20]]}/>
            <CustomCheckBox keyData={'rswg'} checkBoxLabel="Канализация" typeBox={'or'}
                            buttonsText={["Центральная", ["Выгребная яма", 5], ["Септик", 10], ["Биологическая чистая", 15], ["С/у на улице", 20], ["Отсутствует", 25]]}/>
            <CustomCheckBox keyData={'rgz'} checkBoxLabel="Газ" typeBox={'or'}
                            buttonsText={["Рядом", ["Отсутствует", 5]]}/>
            <CustomCheckBox keyData={'relc'} checkBoxLabel="Ремонт" typeBox={'or'}
                            buttonsText={["Рядом", ["На участке", 5], ["Отсутствует", 10]]}/>
        </div>
    );
};

export default SiteFiltering;
