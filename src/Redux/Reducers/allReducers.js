import { SET_USER,SET_DATA, RESET_DATA } from "../Actions/index";
const initialState={
    user:[],
    setData:{}
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user:[...state.user,action.payload]
            }
        case SET_DATA:
          return{
            ...state,
            setData:{...state.setData,...action.payload}
          }
        case RESET_DATA:
            return{
            ...state,
            setData:{}
            }
        default:
            return state
    }
}
