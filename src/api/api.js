import {
    altFotos,
    banner,
    blogs,
    chFotos,
    diagnostics,
    reviews,
    roadFotos,
    services,
    stFotos,
} from "../server/server";

export const getServicesData = () => {
    return services();
};
export const getRoadFotosData = () => {
    return roadFotos();
};
export const getBlogs = () => {
    return new Promise((resolve) => {
        resolve(blogs())
    });
};
export const getStFotosData = () => {
    return stFotos();
};
export const getAltFotosData = () => {
    return altFotos();
};
export const getChFotosData = () => {
    return chFotos();
};
export const getBannerData = () => {
    return banner();
};
export const getDataDiagnostics = (page) => {
    return diagnostics(page);
};
export const getDataReviews = () => {
    return reviews();
};

