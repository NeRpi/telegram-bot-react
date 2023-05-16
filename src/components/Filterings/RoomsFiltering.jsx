import React from "react";
import "./Filtering.css";
import MultipleSelect from "../FilteringComponent/MultiSelect";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";

const RoomFiltering = () => {
    return (
        <div className={"filtering-type"}>
            <MultipleSelect keyData={'rms'} title="Предлагается комнот" values={[1, 2, 3, ["4+", 4]]}/>
            <MultipleSelect keyData={'rmt'} title="Комнат в квартире" values={[2, 3, 4, 5]}/>
            <CustomCheckBox keyData={'rrm'} checkBoxLabel="Тип комнаты" typeBox={'or'}
                            buttonsText={["Проходная", "С отдельным входом"]}/>
            <SelectRange keyData={'st'} placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'sls'} placeholders={['От', 'До']} title={"Продаваемая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'skt'} placeholders={['От', 'До']} title={"Площадь кухни"}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20]}/>
            <CustomCheckBox keyData={'bth'} checkBoxLabel="Санузел" typeBox={'or'}
                            buttonsText={["Раздельный", "Совмещённый", "Два", "Три"]}/>
            <CustomCheckBox keyData={'flch'} checkBoxLabel="Высота потолков от" typeBox={'or'}
                            buttonsText={["2.5м", "2.7м", "3м", "3.5м", "4м"]}/>
            <CustomCheckBox keyData={'flrp'} checkBoxLabel="Ремонт" typeBox={'or'}
                            buttonsText={[["Косметический", 1], ["Евро", 5], ["Дизайнерский", 10], ["Строительная отделка", 15], ["Без отделки", 20], ["Аварийное состояние", 25]]}/>
            <CustomCheckBox keyData={'hst'} checkBoxLabel="Материал стен" typeBox={'or'}
                            buttonsText={["Панельный", "Монолитный", "Кирпичный", "Блочный", "Каркасный", ["Каркасно-блочный", 10]]}/>
            <MultipleSelect keyData={'fl'} title="Этаж"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <MultipleSelect keyData={'nmfl'} title="Этажность дома"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <SelectRange keyData={'yb'} placeholders={['С', 'По']} title={"Год постройки"}
                         values={['1950 или ранее', ...Array.from({length: 75}, (_, i) => 1951 + i)]}/>
            <CustomCheckBox keyData={'fws'} checkBoxLabel="Окна выходят" typeBox={'or'}
                            buttonsText={["Во двор", "На речку", "В парк", "На улицу", "Юг", "Север", "Восток", "Запад"]}/>
            <CustomCheckBox keyData={'fbi'} checkBoxLabel="Обустройство дома" typeBox={'and'}
                            buttonsText={["Лифт", "Пандус", "Мусоропровод", "Огороженная территория", "Парковка крытая", "Стояночное место", "Домофон", "Видеонаблюдение", "Подвал"]}/>
        </div>
    );
};

export default RoomFiltering;
