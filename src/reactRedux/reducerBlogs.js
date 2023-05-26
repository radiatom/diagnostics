import { getBlogs } from './../api/api';

const initialState={
      blogs:[],
      blogFtotos:[]
}
const reducerBlogs=(state=initialState,action)=>{
      switch(action.type){
            case 'setBlogs':{
                  return {...state,blogs:action.data }
            }
            case 'setFotos':{
                  return{...state, blogFtotos:action.data}
            }default :return state
      }
}

export const setBlogs=()=>(dispatch)=>{
      const data=getBlogs()
      dispatch({type: 'setBlogs', data})

}

export default reducerBlogs