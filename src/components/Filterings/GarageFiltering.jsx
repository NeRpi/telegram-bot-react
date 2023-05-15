import React from "react";
import "./Filtering.css";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";
import CustomSelect from "../FilteringComponent/Select";

const GarageFiltering = () => {
    return (
        <div>
            <CustomSelect keyData={'gtp'} title="Вид объекта"
                          values={[["Вид объекта", ""], ["Машиноместо", 1], ["Гараж", 5], ["Бокс", 10], ["Прочее", 15]]}/>
            <SelectRange keyData={'gtp'} placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40]}/>
            <CustomCheckBox keyData={'gprt'} checkBoxLabel="Тип парковки" typeBox={'or'}
                            buttonsText={["На крыше", ["Подземная", 5], ["Наземная", 10], ["Многоуровневая", 15], ["Открытая", 20]]}/>
            <CustomCheckBox keyData={'rhtg'} checkBoxLabel="Отопление" typeBox={'or'}
                            buttonsText={["Газовое", ["Центральное", 5], ["Электрическое", 10], ["Печное", 15], ["Отсутствует", 20]]}/>
        </div>
    );
};

export default GarageFiltering;
