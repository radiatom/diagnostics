import { getServicesData } from "../api/api";

export const initialState = {
    services: [],
};
const reducerServices = (state = initialState, action) => {
    switch (action.type) {
        case "setServices":
            return {
                ...state,
                services: action.data,
            };
        default:
            return state;
    }
};

export const getServices = () => (dispatch) => {
    const data = getServicesData();
    dispatch({ type: "setServices", data: data });
};

export default reducerServices;
