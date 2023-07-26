import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Route,Routes} from 'react-router-dom';

import {Actors,MovieInformation,Movies,Navbar,Profile} from './index'

const App = () => {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
   <main>
    <Routes>
      <Route path="/" element={<Movies/>}/>
      <Route path="/movie:id" element={<MovieInformation/>}/>
      <Route path="/actors" element={<Actors/>}/>
      <Route path="/profile:id" element={<Profile/>}/>
    </Routes>
   </main>
    </>
  )
}

export default App