import { getRoadFotosData } from "../../../api/api";

const initialState = {
    roadFotos: [{id:1,link:''}],
};
const reducerRoadFotos = (state = initialState, action) => {
    switch (action.type) {
        case "addRoadFotos": {
            return { ...state, roadFotos: action.data };
        }
        default:
            return state;
    }
};

export const setRoadFotos = () => (dispatch) => {
    const data = getRoadFotosData();
    dispatch({ type: "addRoadFotos", data });
};

export default reducerRoadFotos;
