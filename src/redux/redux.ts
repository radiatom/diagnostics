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
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "45ahb47856894ed8ggfd45w1htrk4f",
    storage,
}; // для local storage

const redusers = combineReducers({
    bannerPage: reducerBanner,
    blogsPage: reducerBlogs,
    testPage: testReducer,
    servicesPage: reducerServices,
    roadFotosPage: reducerRoadFotos,
    diagnosticsPage: reducerDiagnistics,
});

const persistedReducer = persistReducer(persistConfig, redusers); //для local storage

type reducersType = typeof redusers;
export type appStateType = ReturnType<reducersType>;
//this two function add type from state

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
     // redusers,
     persistedReducer, //для local storage
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store); //для local storage
//@ts-ignore
window.store = store;

export default store;
