import { getBannerData } from "../../../api/api";

const initialState = {
    banner: [{   
      id:1,
      title:"",
      text:"",
      foto:''
  }],
};
const reducerBanner = (state = initialState, action) => {
    switch (action.type) {
        case "addBanner": {
            return { ...state, banner: action.data };
        }
        default:
            return state;
    }
};

export const setBanner = () => (dispatch) => {
    const data = getBannerData();
    dispatch({ type: "addBanner", data });
};

export default reducerBanner;