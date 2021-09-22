import { SET_USER,SET_DATA, RESET_DATA } from "./index";
export const setUser=(data)=>{
    return{
        type:SET_USER,
        payload:data
    }
}
export const setData=(data)=>{
  return{
    type:SET_DATA,
    payload:data
  }
}
export const resetData=()=>{
  return{
    type:RESET_DATA
  }
}