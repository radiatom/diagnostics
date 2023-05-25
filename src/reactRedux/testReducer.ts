import { Dispatch } from "react"
import serverData from "../server/server"


export type solutionType = {
      id: number
      solution: boolean
      text: string
}
export type resaultType = Array<solutionType>
export type testDataType = {
      linkNumber: number | null
      problem: string
      testText: string
      instruction: string
      linkNumberYes: number | null
      linkNumberNo: number | null
      solutionYes: number | null
      solutionNo: number | null
      img: string | null
      video: string | null
} | {}
export type standartStateTestType = {
      testData: testDataType
      resault: resaultType
}
export type setTestDataType = {
      type: typeof SET_TEST_DATA
      testData: testDataType | {}
}
export type setResaultDiagnosticDataType = {
      type: typeof SET_RESAULT_DIAGNOSTIC_DATA
      resault: resaultType
}
export type actionsTypes = setTestDataType | setResaultDiagnosticDataType 


const SET_TEST_DATA = 'testReducer/SET_TEST_DATA'
export const setTestData = (testData: testDataType | {}): setTestDataType => {
      return {
            type: SET_TEST_DATA,
            testData: testData
      }
}
const SET_RESAULT_DIAGNOSTIC_DATA = 'testReducer/SET_RESAULT_DIAGNOSTIC_DATA'
export const setResaultDiagnosticData = (resault: resaultType): setResaultDiagnosticDataType => {
      return {
            type: SET_RESAULT_DIAGNOSTIC_DATA,
            resault: resault
      }
}


const standartStateTest: standartStateTestType = {
      testData: {
            linkNumber: null,
            problem: '',
            testText: '',
            instruction: '',
            linkNumberYes: null,
            linkNumberNo: null,
            solutionYes: null,
            solutionNo: null,
            img: '',
            video: '',
      },
      resault: []

}


const testReducer = (state: standartStateTestType = standartStateTest, action: actionsTypes): standartStateTestType => {
      switch (action.type) {
            case SET_TEST_DATA:
                  return {
                        ...state,
                        testData: action.testData
                  }
            case SET_RESAULT_DIAGNOSTIC_DATA:
                  return {
                        ...state,
                        resault: action.resault
                  }
            default:
                  return state
      }
}


export const getTestData = (linkNumber: number) => (dispatch: Dispatch<actionsTypes>) => {
      let testData = {}
      serverData.testCard.map(el => {
            if (el.linkNumber === linkNumber) {
                  return testData = el
            }
            return testData
      })
      dispatch(setTestData(testData))
}

export const getResaultDiagnosticData = () => (dispatch: Dispatch<actionsTypes>) => {
      const finishResaultDiagnostic: resaultType = []
      serverData.resaultDiagnostic.map(el => {
            if (el.solution === true) {
                  finishResaultDiagnostic.push(el)
            }
            return finishResaultDiagnostic
      })
      dispatch(setResaultDiagnosticData(finishResaultDiagnostic))
      sessionStorage.setItem('res', JSON.stringify(finishResaultDiagnostic));
      //Об'єкт sessionStorage доступний в середовищі браузера і використовується для зберігання даних на протязі однієї сесії браузера, тобто поки відкрита відповідна вкладка або вікно браузера. Після закриття сесії або вкладки, дані в sessionStorage видаляються.
}
export const setSaveResault = () => (dispatch: Dispatch<actionsTypes>) => {
      const res = JSON.parse(sessionStorage.getItem('res') || '{"error":"no res"}')
      dispatch(setResaultDiagnosticData(res))
      //функція яка вертає результат діагностики який був збережений в sessionStorage.
      //|| '{"error":"no res"}' перевірка щоб TS не сварився
}
export const updateRes = () => (dispatch: Dispatch<actionsTypes>) => {
      serverData.resaultDiagnostic.forEach(el => {
            if (el.solution === true) {
                  return el.solution = false
            }
      })
      //@ts-ignore
      dispatch(getResaultDiagnosticData())
      //фунція скидання  результатів попередніх відповідей
}
export const putSolutionTestTrue = (linkSolution: number) => (dispatch: Dispatch<actionsTypes>) => {
      serverData.resaultDiagnostic.forEach(el => {
            if (el.id === linkSolution) {
                  return el.solution = true
            }
      })
      //@ts-ignore
      dispatch(getResaultDiagnosticData())

}
export const putSolutionTestFalse = (linkSolution: number) => (dispatch: Dispatch<actionsTypes>) => {
      serverData.resaultDiagnostic.forEach(el => {
            if (el.id === linkSolution) {
                  return el.solution = false
            }
      })
      //@ts-ignore
      dispatch(getResaultDiagnosticData())

}
export default testReducer