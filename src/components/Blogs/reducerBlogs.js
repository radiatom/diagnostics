import {
    getAltFotosData,
    getBlogs,
    getChFotosData,
    getStFotosData,
} from "../../api/api";

const initialState = {
    blogs: [],
    blogFtotos: [],
    load:false
};
const reducerBlogs = (state = initialState, action) => {
    switch (action.type) {
        case "setBlogs": {
            return { ...state, blogs: action.data };
        }
        case "setFotos": {
            return { ...state, blogFtotos: action.data };
        }
        case 'setLoad': {
            return{...state, load:!state.load}
        }
        default:
            return state;
    }
};

export const setBlogs = () => async (dispatch) => {
    // dispatch({type:'setLoad'})
    const data = await getBlogs();
    // dispatch({type:'setLoad'})
    dispatch({ type: "setBlogs", data });
};
export const setStFotos = () =>async (dispatch) => {
    const data =await getStFotosData();
    dispatch({ type: "setFotos", data });
};
export const setAltFotos = () =>async (dispatch) => {
    const data =await getAltFotosData();
    dispatch({ type: "setFotos", data });
};
export const setChFotos = () =>async (dispatch) => {
    const data =await getChFotosData();
    dispatch({ type: "setFotos", data });
};
export default reducerBlogs;
