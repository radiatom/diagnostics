import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import testReducer from "./testReducer";
import reducerRoadFotos from './reducerRoadFotos'
import thunkMiddleware from "redux-thunk";
import reducerServices from './reducerServices';

const redusers = combineReducers({
    testPage: testReducer,
    servicesPage: reducerServices ,
    roadFotosPage:reducerRoadFotos,
})

type reducersType = typeof redusers
export type appStateType= ReturnType<reducersType>
//this two function add type from state

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store

export default store