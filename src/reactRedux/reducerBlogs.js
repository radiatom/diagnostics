import {
    getAltFotosData,
    getBlogs,
    getChFotosData,
    getStFotosData,
} from "./../api/api";

const initialState = {
    blogs: [],
    blogFtotos: [
      //   { id: 1, link: "" },
      //   { id: 2, link: "" },
      //   { id: 3, link: "" },
    ],
};
const reducerBlogs = (state = initialState, action) => {
    switch (action.type) {
        case "setBlogs": {
            return { ...state, blogs: action.data };
        }
        case "setFotos": {
            return { ...state, blogFtotos: action.data };
        }
        default:
            return state;
    }
};

export const setBlogs = () => (dispatch) => {
    const data = getBlogs();
    dispatch({ type: "setBlogs", data });
};
export const setStFotos = () => (dispatch) => {
    const data = getStFotosData();
    dispatch({ type: "setFotos", data });
};
export const setAltFotos = () => (dispatch) => {
    const data = getAltFotosData();
    dispatch({ type: "setFotos", data });
};
export const setChFotos = () => (dispatch) => {
    const data = getChFotosData();
    dispatch({ type: "setFotos", data });
};
export default reducerBlogs;
