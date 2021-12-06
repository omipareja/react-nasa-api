import React from 'react'
import { useSelector } from 'react-redux'
import {NasaJumbotron} from '../ui/NasaJumbotron'
import { SpaceCard } from './SpaceCard'
export const SpaceList = () => {

    const {spaceData} = useSelector(state => state.nasa)

    return (
        <>
        
            <NasaJumbotron />
            <div className="container">
                <div className="row">
                    {spaceData.map(data=>(
                        <div key={data.title} className="card col-3 mt-5 mx-5">
                            <SpaceCard
                                key= {data.title}
                                {...data}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
