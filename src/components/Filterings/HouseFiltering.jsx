import React from "react";
import "./Filtering.css";
import MultipleSelect from "../FilteringComponent/MultiSelect";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";

const HouseFiltering = () => {
    return (
        <div>
            <MultipleSelect keyData={'hnfl'} title="Этажность" values={[1, 2, 3, ["4+", 5]]}/>
            <CustomCheckBox keyData={'hts'} checkBoxLabel="Вид объекта" typeBox={'or'}
                            buttonsText={[["Дом", 1], ["Котеджи", 5], ["Дача", 10], ["Таунхаус", 25], ["Часть дома", 15], ["Прочее", 20]]}/>
            <SelectRange keyData={'saa'} placeholders={['От', 'До']} title={"Площадь участка"}
                         values={[0, 5, 6, 8, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40]}/>
            <SelectRange keyData={'sls'} placeholders={['От', 'До']} title={"Жилая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'st'} placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'skt'} placeholders={['От', 'До']} title={"Площадь кухни"}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20]}/>
            <CustomCheckBox keyData={'flch'} checkBoxLabel="Высота потолков от" typeBox={'or'}
                            buttonsText={["2.5м", "2.7м", "3м", "3.5м", "4м"]}/>
            <CustomCheckBox keyData={'flrp'} checkBoxLabel="Ремонт" typeBox={'or'}
                            buttonsText={["Косметический", "Евро", "Дизайнерский", "Строительная отделка", "Без отделки", "Аварийное состояние"]}/>
            <SelectRange keyData={'yb'} placeholders={['С', 'По']} title={"Год постройки"}
                         values={['1950 или ранее', ...Array.from({length: 75}, (_, i) => 1951 + i)]}/>
            <CustomCheckBox keyData={'wmt'} checkBoxLabel="Материал стен"
                            buttonsText={["Кирпич", "Дерево", "Дерево, обложено кирпичом", "Сборно-щитовой", "Блочный", "Керамзитбетон", "Шлакбетон", "Панельный", "Другой"]}/>
            <CustomCheckBox keyData={'hrm'} checkBoxLabel="Материал крыши"
                            buttonsText={["Шифер", ["Металлочерепица", 5], ["Мягкая кровля", 10], ["Прочее", 15]]}/>
            <CustomCheckBox keyData={'hst'} checkBoxLabel="Отопление"
                            buttonsText={["Газовое", ["Центральное", 5], ["Электрическое", 10], ["Печное", 15], ["Отсутствует", 20]]}/>
            <CustomCheckBox keyData={'rwtr'} checkBoxLabel="Вода" typeBox={'or'}
                            buttonsText={["Сезонная", ["Скважина", 5], ["Колодец", 10], ["Центральная", 15], ["Отсутсвует", 20]]}/>
            <CustomCheckBox keyData={'rswg'} checkBoxLabel="Канализация" typeBox={'or'}
                            buttonsText={["Центральная", ["Выгребная яма", 5], ["Септик", 10], ["Биологическая чистая", 15], ["С/у на улице", 20], ["Отсутствует", 25]]}/>
            <CustomCheckBox keyData={'rgz'} checkBoxLabel="Газ" typeBox={'or'}
                            buttonsText={[["Рядом", 1], ["Отсутствует", 5]]}/>
            <CustomCheckBox keyData={'himp'} checkBoxLabel="Удобства" typeBox={'and'}
                            buttonsText={["Интернет", "Телевизор", "Телефон", "Коондиционер", "Обустройенная кухня", "Обустроенный туалет", "Мебель", "Камин", "Ванная комната", "Стиральная машина", "Джакузи", "Душевая кабина", "Парковка", "Гараж", "Сигнализация"]}/>
            <CustomCheckBox keyData={'fbi'} checkBoxLabel="На территории" typeBox={'and'}
                            buttonsText={["Рядом водоём/река", "Рядом лес", "Баня", "Беседка", "Мангал", "Бассейн", "Ландшафтный дизайн", "Хоз. постройки", "Сад, огород", "Рядом достопримечательности", "Живописное место"]}/>
        </div>
    );
};

export default HouseFiltering;
