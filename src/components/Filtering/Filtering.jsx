import React, {useCallback, useEffect} from "react";
import "./Filtering.css";
import MultipleSelect from "./MultiSelect";
import Location from "./Location";
import PriceRangeInput from "./Price";
import CustomCheckBox from "./CheckBox";
import SelectRange from "./SelectRange";
import CustomSelect from "./Select";
import useTelegram from "../../hooks/useTelegram";

const Filtering = () => {
    const {tg, sendData, onToggleButton} = useTelegram();
    onToggleButton();
    const onSendData = useCallback(() => {
        sendData()
    }, [sendData])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData, tg])

    return (
        <div className={"filtering"}>
            <h3 style={{margin: "10px"}}>Фильтрация</h3>
            <CustomSelect keyData={'typeHouse'}/>
            <PriceRangeInput keyData={'price'}/>
            <Location keyData={'location'}/>
            <MultipleSelect keyData={'roomsCount'} title="Количество комнат" values={[1, 2, 3, 4, 5]}/>
            <SelectRange keyData={'totalArea'} placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'livingArea'} placeholders={['От', 'До']} title={"Жилая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'kitchenArea'} placeholders={['От', 'До']} title={"Площадь кухни"}
                         values={[0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20]}/>
            <CustomCheckBox keyData={'bathroom'} checkBoxLabel="Санузел"
                            buttonsText={["Раздельный", "Совмещённый", "Два", "Три"]}/>
            <CustomCheckBox checkBoxLabel="Балкон" buttonsText={["Есть", "Нет", "Лоджи", "Два"]} keyData={'balcony'}/>
            <CustomCheckBox keyData={'ceilingHeight'} checkBoxLabel="Высота потолков от"
                            buttonsText={["2.5м", "2.7м", "3м", "3.5м", "4м"]}/>
            <CustomCheckBox keyData={'repair'} checkBoxLabel="Ремонт"
                            buttonsText={["Косметический", "Евро", "Дизайнерский", "Строительная отделка", "Без отделки", "Аварийное состояние"]}/>
            <CustomCheckBox keyData={'wallMaterial'} checkBoxLabel="Материал стен"
                            buttonsText={["Панельный", "Монолитный", "Кирпичный", "Блочный", "Каркасный", "Каркасно-блочный"]}/>
            <MultipleSelect keyData={'floor'} title="Этаж"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <MultipleSelect keyData={'floorsHouse'} title="Этажность дома"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <SelectRange keyData={'yearBuild'} placeholders={['С', 'По']} title={"Год постройки"}
                         values={['1950 или ранее', ...Array.from({length: 75}, (_, i) => 1951 + i)]}/>
            <CustomCheckBox keyData={'windowOverlook'} checkBoxLabel="Окна выходят"
                            buttonsText={["Во двор", "На речку", "В парк", "На улицу", "Юг", "Север", "Восток", "Запад"]}/>
            <CustomCheckBox keyData={'homeImprovement'} checkBoxLabel="Обустройство дома"
                            buttonsText={["Лифт", "Пандус", "Мусоропровод", "Огороженная территория", "Парковка крытая", "Стояночное место", "Домофон", "Видеонаблюдение", "Подвал"]}/>
        </div>
    );
};

export default Filtering;
