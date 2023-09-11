import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../apps/layout';
import { Components } from '../../components';

const LayoutRoutes = () => {
  return (
    <React.Fragment>
      <Components.Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes;
