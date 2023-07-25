const initialState = {
    isMobile: false,
};
const reducerAll = (state = initialState, action) => {
    switch (action.type) {
        case "setDevice": {
            return { ...state, isMobile: true };
        }
        default:
            return state;
    }
};

export const setDevice = () => (dispatch) => {
    const isMobile = {
        Android: () => {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: () => {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: () => {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: () => {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: () => {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: () => {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };
    if (isMobile.any()) {
        dispatch({ type: "setDevice" });
    }
};

export default reducerAll;
