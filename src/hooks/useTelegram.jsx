const tg = window.Telegram.WebApp;

const data = {
    typeHouse: 1,
    price: null,
    location: null,
    roomsCount: null,
    totalArea: null,
    livingArea: null,
    kitchenArea: null,
    bathroom: null,
    balcony: null,
    ceilingHeight: null,
    repair: null,
    wallMaterial: null,
    floor: null,
    floorsHouse: null,
    yearBuild: null,
    windowOverlook: null,
    homeImprovement: null,
};

function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    const setData = (values) => {
        const [key] = Object.keys(values);
        data[key] = values[key];
        console.log(data);
    }

    const sendData = () => {
        tg.sendData(JSON.stringify(data));
    }

    return {
        onToggleButton,
        sendData,
        setData,
        onClose,
        tg,
        user: tg?.initDataUnsafe?.user
    }
}

export default useTelegram;