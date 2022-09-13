import React from 'react' ;
import {MemoryRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home';
import Page2 from '../Pages/Page2';

export default function AppRoutes(){
    return (
      <Router>  
        <Routes>
            <Route 
                path='/' 
                element={<Home />}
            />
            <Route 
                path='/page2'
                element={<Page2/>}
            />
        </Routes>
      </Router>
    )
}