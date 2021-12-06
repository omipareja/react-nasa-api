import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import { useDispatch } from "react-redux";
import { startFinddSpaceImages } from "../../actions/Nasa";
import { useSelector } from "react-redux";
import { SpaceCard } from "./SpaceCard";


export const SearchSpace = ({history}) => {


    const [startDate, setStartDate] = useState(
        new Date()
        
        );


    const location = useLocation()

    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const date = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDay()}`
        dispatch(startFinddSpaceImages(date))
    }

    const {search} = useSelector(state => state.nasa)
    console.log(search)

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mt-5">
                    <h1>Realiza tu Busqueda</h1>
                    <form onSubmit={handleSubmit}>
                        <DatePicker
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                        />
                        
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-secondary"
                        >
                            Search ...
                        </button>
    
                    </form>
                </div>
                <div className="col-7">
                    {
                        (Object.entries(search).length !=0)
                        ?
                        <SpaceCard 
                            {...search}
                        />
                        : 
                        <div className="alert alert-dark mx-5 espaciado" role="alert">
                            Por Favor Realiza Una Busqueda
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
