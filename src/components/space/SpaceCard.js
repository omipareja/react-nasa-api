import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SelectSpaceImage } from '../../actions/Nasa'
import { useHistory } from 'react-router'

export const SpaceCard = ({hdurl,title,date,explanation}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = ()=>{
        const data = {
            title,
            hdurl,
            date,
            explanation
        }

        dispatch(SelectSpaceImage(data))
        history.push("/space/detail")
    }
    return (
        <>
        
        <div onClick={handleClick} className="select">
            <div className="" >
                <img src={hdurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5><strong>{title}</strong></h5>
                    <p className="card-text">{date =='' ? 'information not available' : date}</p>
                </div>
            </div>
        </div>
        </>
    )
}
