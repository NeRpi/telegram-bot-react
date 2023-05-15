import React, {useCallback, useEffect, useState} from "react";
import "./Filtering.css";
import PriceRangeInput from "../FilteringComponent/Price";
import CustomSelect from "../FilteringComponent/Select";
import useTelegram from "../../hooks/useTelegram";
import ApartmentFiltering from "./ApartmentFiltering";
import HouseFiltering from "./HouseFiltering";
import RoomFiltering from "./RoomsFiltering";
import GarageFiltering from "./GarageFiltering";
import NewBuildFiltering from "./NweBuildsFiltering";
import SiteFiltering from "./SiteFiltering";
import CommercialFiltering from "./CommercialFiltering";
import Location from "../FilteringComponent/Location";


const HousingCategories = {
    1010: <ApartmentFiltering/>,
    1020: <HouseFiltering/>,
    1040: <RoomFiltering/>,
    1030: <GarageFiltering/>,
    1120: <NewBuildFiltering/>,
    1080: <SiteFiltering/>,
    1050: <CommercialFiltering/>
}

const Filtering = () => {
    const {tg, sendData, clearData} = useTelegram();
    const [renderElement, setRenderElement] = useState(<ApartmentFiltering/>);
    const handleCategories = (value) => {
        clearData();
        setRenderElement(HousingCategories[value]);
    }
    tg.MainButton.show();
    const onSendData = useCallback(() => {
        sendData()
    }, [sendData])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData, tg])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Применить фильтры'
        })
    }, [tg.MainButton])

    return (
        <div className={"filtering"}>
            <h3 style={{margin: "10px"}}>Фильтрация</h3>
            <CustomSelect keyData={'cat'} title="Тип жилья" onChange={handleCategories}
                          values={[["Квартиры", 1010], ["Дома и котеджи", 1020], ["Комнаты", 1040], ["Гаражи и стоянки", 1030], ["Новостройки", 1120], ["Участки", 1080], ["Коммерческая", 1050]]}/>
            <CustomSelect keyData={'sort'} title="Сортировка"
                          values={[["По новизне", "lst.d"], ["По дешевле", "prc.a"], ["По дороже", "prc.d"]]}/>
            <PriceRangeInput keyData={'prc'}/>
            <Location keyData={'gtsy'}/>
            {renderElement}
        </div>
    );
};

export default Filtering;
