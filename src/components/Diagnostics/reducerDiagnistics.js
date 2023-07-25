import { getDataDiagnostics } from "../../api/api";

const initialState = {
    dataDiagnostics: {
        texts: [{ id: 1, text: "" }],
        cards: [{ id: 1, title: "", problem: "", text: "", link: 1 }],
    },
};
const reducerDiagnistics = (state = initialState, action) => {
    switch (action.type) {
        case "setDataDiagnostics": {
            return { ...state, dataDiagnostics: action.data };
        }
        default:
            return state;
    }
};

export const getDiagnostics=(page)=>(dispatch)=>{
      const data = getDataDiagnostics(page)
      dispatch({type:"setDataDiagnostics", data})
}

export default reducerDiagnistics
