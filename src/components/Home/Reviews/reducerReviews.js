import { getDataReviews } from "../../../api/api";

const initialState = {
    reviews: [],
};
const reducerBanner = (state = initialState, action) => {
    switch (action.type) {
        case "addReviews": {
            return { ...state, reviews: action.data };
        }
        default:
            return state;
    }
};

export const setBanner = () => (dispatch) => {
    const data = getDataReviews();
    dispatch({ type: "addReviews", data });
};

export default reducerBanner;