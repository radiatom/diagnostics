import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
} from "redux";
import testReducer from "../components/Diagnostics/TestsPage/Test/testReducer";
import reducerRoadFotos from "../components/Home/Contact/Slider/reducerSlider";
import thunkMiddleware from "redux-thunk";
import reducerServices from "../components/Home/Services/reducerServices";
import reducerBlogs from "../components/Home/Blogs/reducerBlogs";
import reducerDiagnistics from "../components/Diagnostics/reducerDiagnistics";
import reducerBanner from "../components/Home/Banner/reducerBanner";
import reducerAll from "./reducerAll";

const redusers = combineReducers({
    bannerPage: reducerBanner,
    blogsPage: reducerBlogs,
    testPage: testReducer,
    servicesPage: reducerServices,
    roadFotosPage: reducerRoadFotos,
    diagnosticsPage: reducerDiagnistics,
    allPage: reducerAll,
});

type reducersType = typeof redusers;
export type appStateType = ReturnType<reducersType>;
//this two function add type from state

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
    redusers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

//@ts-ignore
window.store = store;

export default store;
