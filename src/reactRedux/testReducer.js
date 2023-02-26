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
            linkNumber: null,
            problem: "test text",
            testText: "test text",
            linkNumberYes: "test text",
            linkNumberNo: "test text",
            img: null,
            video: null,
      },
      resault:[1,2,3]

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
            return value.solution? value.text:undefined
      });
      const finishResaultDiagnostic= arr.filter(el=>el!==undefined)
      dispatch(setResaultDiagnosticData(finishResaultDiagnostic))
}


export const putSolutionTestTrue = (linkSolution) => {
      serverData.resaultDiagnostic[linkSolution].solution = true
}
export const putSolutionTestFalse = (linkSolution) => {
      serverData.resaultDiagnostic[linkSolution].solution = false
}
export default testReducer