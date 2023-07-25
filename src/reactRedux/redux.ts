import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import testReducer from "../components/TestsPage/Test/testReducer";
import reducerRoadFotos from '../components/Contact/RoadFoto/reducerRoadFotos'
import thunkMiddleware from "redux-thunk";
import reducerServices from '../components/Services/reducerServices';
import reducerBlogs from '../components/Blogs/reducerBlogs'
import reducerDiagnistics from '../components/Diagnostics/reducerDiagnistics'
import reducerBanner from '../components/Banner/reducerBanner'


const redusers = combineReducers({
    bannerPage:reducerBanner,
    blogsPage:reducerBlogs,
    testPage: testReducer,
    servicesPage: reducerServices ,
    roadFotosPage:reducerRoadFotos,
    diagnosticsPage: reducerDiagnistics,
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