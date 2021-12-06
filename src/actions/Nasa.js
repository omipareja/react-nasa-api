import { ApodDateFetch, ApodFetch } from "../helpers/fetch"
import { types } from "../types/types"


export const startLoadingSpaceImages = () =>{
    return async(dispatch)=>{
        try{
            const resp = await ApodFetch()
            if(resp.ok){
                const data = await resp.json()
                dispatch(startLoadImges(data))
            }
        }catch(err){
            console.log('error')
        }
        

    }
}

const startLoadImges = (data) =>({
    type:types.StartLoadSpaceImages,
    payload:data
})

export const startFinddSpaceImages = (date)=>{
    
    return async(dispatch) =>{
        try{
            const resp = await ApodDateFetch(date)
            if(resp.ok){
                const data = await (await resp).json()
                dispatch(FindImage(data))
            }
        }catch(err){
            
            console.log(err)
        }
    }
}

export const SelectSpaceImage = (data) =>({
    type:types.SelectImage,
    payload:data
})

const FindImage = (data) =>({
    type:types.FindImage,
    payload: data
})