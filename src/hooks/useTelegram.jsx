const tg = window.Telegram.WebApp;

let data = {
    cat: {fieldValue: "Тип жилья", messageValue: "Квартиры", urlValue: "cat=1010"},
    sort: null,
    prc: null,
    gtsy: null,
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
        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data, queryId: tg?.initDataUnsafe?.query_id})
        }).then(r => console.log(r))
            .catch(e => console.log(e));
    }

    const clearData = () => {
        const {cat, sort, prc, gtsy} = data;
        data = {cat, sort, prc, gtsy};
    }

    return {
        onToggleButton,
        sendData,
        clearData,
        setData,
        onClose,
        tg,
        user: tg?.initDataUnsafe?.user,
        queryId: tg?.initDataUnsafe?.query_id,
    }
}

export default useTelegram;