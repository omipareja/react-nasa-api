import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { startLoadingSpaceImages } from "../actions/Nasa";
import { NasaScreen } from "../components/space/NasaScreen";
import { SearchSpace } from "../components/space/SearchSpace";
import { SpaceDetail } from "../components/space/SpaceDetail";
import { Navbar } from "../components/ui/Navbar";




export const AppRouter = () =>{

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startLoadingSpaceImages())
    }, [dispatch])

    return (
        <>
            <div>
               <Router>
                   <Navbar />
                   <Switch>
                       <Route  exact path = "/" component={NasaScreen} />
                       <Route exact path ="/space/detail" component={SpaceDetail}/>
                       <Route  exact path ="/search" component={SearchSpace}/>
                       <Redirect to="/" />
                   </Switch>
                </Router> 
            </div>
        </>
    )

}