import { appStateType } from "../reactRedux/redux"

export const testDataSelector = (state: appStateType) => {
    return state.testPage.testData
}
export const resaultSelector = (state: appStateType) => {
    return state.testPage.resault
}
export const servicesSelector=(state:appStateType)=>{
    return state.servicesPage.services
}