import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import testReducer from "./testReducer";
import thunkMiddleware from "redux-thunk";
// import {reducer as formReducer} from 'redux-form'
import reducerServices from './reducerServices';

const redusers = combineReducers({
    testPage: testReducer,
    servicesPage: reducerServices 
})

type reducersType = typeof redusers
export type appStateType= ReturnType<reducersType>
//this two function add type from state

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware),) це оригінальний творець, а веще перероблений, щоб можна 
// було користуватись розширенням хрома redux DevTols

//@ts-ignore
window.store = store

export default store