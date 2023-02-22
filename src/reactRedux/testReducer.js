import serverData from "../server/server"


const SET_TEST_DATA = 'testReducer/SET_TEST_DATA'
export const setTestData = (testData) => {
      return {
            type: SET_TEST_DATA,
            testData: testData
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
      
}
const testReducer = (state = standartStateTest, action) => {
      switch (action.type) {
            case SET_TEST_DATA:
                  return {
                        ...state,
                        testData: action.testData
                  }
            default:
                  return state
      }
}
export const getTestData = (linkNumber) => (dispatch) => {
      const testData = serverData[linkNumber]
      dispatch(setTestData(testData))
}

export default testReducer