import { appStateType } from "../reactRedux/redux";

export const testDataSelector = (state: appStateType) => {
    return state.testPage.testData;
};
export const resaultSelector = (state: appStateType) => {
    return state.testPage.resault;
};
export const servicesSelector = (state: appStateType) => {
    return state.servicesPage.services;
};
export const roadFotosSelector = (state: appStateType) => {
    return state.roadFotosPage.roadFotos;
};
export const blogsSelector=(state: appStateType) =>{
    return state.blogsPage.blogs
}
export const blogFotosSelector=(state: appStateType) =>{
    return state.blogsPage.blogFtotos
}
