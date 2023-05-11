import React from "react";
import "./Filtering.css";
import MultipleSelect from "./MultiSelect";
import Location from "./Location";
import PriceRangeInput from "./Price";
import CustomCheckBox from "./CheckBox";
import SelectRange from "./SelectRange";
import CustomSelect from "./Select";

const Filtering = () => {
    const tg = window.Telegram.WebApp;

    return (
        <div className={"filtering"}>
            <h1>{tg.initDataUnsafe?.user?.username}</h1>
            <h3 style={{margin: "10px"}}>Фильтрация</h3>
            <CustomSelect/>
            <PriceRangeInput/>
            <Location/>
            <MultipleSelect title="Количество комнат" values={[1, 2, 3, 4, 5]}/>
            <SelectRange placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange placeholders={['От', 'До']} title={"Жилая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange placeholders={['От', 'До']} title={"Площадь кухни"}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20]}/>
            <CustomCheckBox checkBoxLabel="Санузел" buttonsText={["Раздельный", "Совмещённый", "Два", "Три"]}/>
            <CustomCheckBox checkBoxLabel="Балкон" buttonsText={["Есть", "Нет", "Лоджи", "Два"]}/>
            <CustomCheckBox checkBoxLabel="Высота потолков от" buttonsText={["2.5м", "2.7м", "3м", "3.5м", "4м"]}/>
            <CustomCheckBox checkBoxLabel="Ремонт"
                            buttonsText={["Косметический", "Евро", "Дизайнерский", "Строительная отделка", "Без отделки", "Аварийное состояние"]}/>
            <CustomCheckBox checkBoxLabel="Материал стен"
                            buttonsText={["Панельный", "Монолитный", "Кирпичный", "Блочный", "Каркасный", "Каркасно-блочный"]}/>
            <MultipleSelect title="Этаж" values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <MultipleSelect title="Этажность дома" values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <SelectRange placeholders={['С', 'По']} title={"Год постройки"}
                         values={['1950 или ранее', ...Array.from({length: 75}, (_, i) => 1951 + i)]}/>
            <CustomCheckBox checkBoxLabel="Окна выходят"
                            buttonsText={["Во двор", "На речку", "В парк", "На улицу", "Юг", "Север", "Восток", "Запад"]}/>
            <CustomCheckBox checkBoxLabel="Обустройство дома"
                            buttonsText={["Лифт", "Пандус", "Мусоропровод", "Огороженная территория", "Парковка крытая", "Стояночное место", "Домофон", "Видеонаблюдение", "Подвал"]}/>
        </div>
    );
};

export default Filtering;
