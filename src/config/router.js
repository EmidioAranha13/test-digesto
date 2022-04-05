import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Home, Process} from '../views/index';

/**
 * Return all routes.
 */
const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Processo" element={<Process/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;