
export const getImageByTitle = (images=[],title)=>{

    const data = images.find(image => image.title === title)
    if(data){
        return data
    }else{
        return []
    }
}