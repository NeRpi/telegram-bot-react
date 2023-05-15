import React from "react";
import "./Filtering.css";
import MultipleSelect from "../FilteringComponent/MultiSelect";
import CustomCheckBox from "../FilteringComponent/CheckBox";
import SelectRange from "../FilteringComponent/SelectRange";
import CustomSelect from "../FilteringComponent/Select";

const CommercialFiltering = () => {
    return (
        <div>
            <CustomSelect keyData={'prt'} title={"Тип здания"} typeBox={'or'}
                          values={["Любой", "Офисы", "Магазины, торговые помещения", "Промышленные помещения", "Склад", ["Сфера услуг", 10], ["Прочая коммерческая", 6]]}/>
            <SelectRange keyData={'st'} placeholders={['От', 'До']} title={"Общая площадь"}
                         values={[0, 25, 35, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200]}/>
            <SelectRange keyData={'cmrm'} placeholders={['От', 'До']} title={"Количество рездельных помещений"}
                         values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]}/>
            <CustomSelect keyData={'prt'} title={"Находится"}
                          values={["В бизнес центре", ["В торговом центре", 5], ["В развлекательном центре", 10], ["В жилом доме", 15], ["В подземном переходе", 20], ["В частном доме", 25], ["Отдельное здание", 30], ["Прочее", 35]]}/>
            <CustomCheckBox keyData={'cmim'} checkBoxLabel="Удобства" typeBox={'and'}
                            buttonsText={["Отопление", "Собственный сан. узел", "Горячая вода", "Холодная вода", "С отделкой", "С оборудованием", "С мебелью", "Кондиционер", "Телефон", "Скорость Интернет", "Круглосуточный доступ", "Свобоная планировка", "Отдельный вход", "Лифт", "Видионаблюдение", "Парковка"]}/>
            <CustomCheckBox keyData={'cmrp'} checkBoxLabel="Ремонт" typeBox={'or'}
                            buttonsText={["Офисная отделка", ["Под чистовую отделку", 5], ["Требуется капитальный ремонт", 10], ["Требуется косметический ремонт", 15]]}/>
            <MultipleSelect keyData={'fl'} title="Этаж"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
            <MultipleSelect keyData={'nmfl'} title="Этажность дома"
                            values={[...Array.from({length: 30}, (_, i) => i + 1), 'более 30']}/>
        </div>
    );
};

export default CommercialFiltering;
