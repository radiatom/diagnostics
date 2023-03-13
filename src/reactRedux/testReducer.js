import serverData from "../server/server"


const SET_TEST_DATA = 'testReducer/SET_TEST_DATA'
export const setTestData = (testData) => {
      return {
            type: SET_TEST_DATA,
            testData: testData
      }
}

const SET_RESAULT_DIAGNOSTIC_DATA = 'testReducer/SET_RESAULT_DIAGNOSTIC_DATA'
export const setResaultDiagnosticData = (resault) => {
      return {
            type: SET_RESAULT_DIAGNOSTIC_DATA,
            resault: resault
      }
}


const standartStateTest = {
      testData: {
            linkNumber: '',
            problem: '',
            testText: '',
            instruction: '',
            linkNumberYes: '',
            linkNumberNo: '',
            solutionYes: '',
            solutionNo: '',
            img: '',
            video: '',
      },
      resault: []

}
const testReducer = (state = standartStateTest, action) => {
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
export const getTestData = (linkNumber) => (dispatch) => {
      const testData = serverData.testCard[linkNumber]
      dispatch(setTestData(testData))
}


export const getResaultDiagnosticData = () => (dispatch) => {
      const arr = Object.entries(serverData.resaultDiagnostic).map(([key, value]) => {
            return value.solution ? value.text : undefined
      });
      const finishResaultDiagnostic = arr.filter(el => el !== undefined)
      dispatch(setResaultDiagnosticData(finishResaultDiagnostic))

      sessionStorage.setItem('res', JSON.stringify(finishResaultDiagnostic));
      //Об'єкт sessionStorage доступний в середовищі браузера і використовується для зберігання даних на протязі однієї сесії браузера, тобто поки відкрита відповідна вкладка або вікно браузера. Після закриття сесії або вкладки, дані в sessionStorage видаляються.
}

export const updateRes = () => (dispatch) => {
      for (let a = 1; a <= 63; a++) {
            serverData.resaultDiagnostic[a].solution = false
      }
      dispatch(getResaultDiagnosticData())
      //фунція скидання  результатів попередніх відповідей
}

export const setSaveResault = () => (dispatch) => {
      debugger
      const res = JSON.parse(sessionStorage.getItem('res'))
      dispatch(setResaultDiagnosticData(res))
      //функція яка вертає результат діагностики який був збережений в sessionStorage.
}


export const putSolutionTestTrue = (linkSolution) => (dispatch) => {
      serverData.resaultDiagnostic[linkSolution].solution = true
      dispatch(getResaultDiagnosticData())
}
export const putSolutionTestFalse = (linkSolution) => (dispatch) => {
      serverData.resaultDiagnostic[linkSolution].solution = false
      dispatch(getResaultDiagnosticData())
}
export default testReducer