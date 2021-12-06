import React from 'react'
import { useSelector } from 'react-redux'

import { NasaJumbotron } from '../ui/NasaJumbotron'

export const SpaceDetail = ({history}) => {


    const {search:data} = useSelector(state =>state.nasa)
    

    if(Object.entries(data).length===0){
        history.push('/')
    }

    return (
        <div>
            <NasaJumbotron />
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img  
                            src={data.hdurl}
                            className="img-thumbnail mt-3"
                        />
                    </div>
                    <div className="col-5 mt-3">
                        <p><strong>Title:</strong> {data.title}</p>
                        <p><strong>Description : </strong> {(data.dexplanation==='') ? ('description not available'): data.explanation} </p>
                        <p><strong>Date :</strong> {data.date}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
