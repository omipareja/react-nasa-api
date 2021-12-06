import { types } from "../types/types";

const initialState = {
    spaceData: [],
    search: {},
    loading: true
}


export const nasaReducer = (state=initialState,action)=>{
    switch (action.type) {
        case types.StartLoadSpaceImages:
            return {
                ...state,
                spaceData: action.payload,
                loading:false
            }
        case types.LoadImagesComplete:
            return{
                ...state,
                loading:false
            }
        case types.FindImage:
            return{
                ...state,
                search:action.payload
            }
        case types.SelectImage:
            return{
                ...state,
                search:action.payload
            }
        default:
            return state;
    }
}