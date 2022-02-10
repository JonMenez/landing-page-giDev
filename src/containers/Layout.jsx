import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@containers/Header'
import Footer from '@containers/Footer';

const Layout = () => {
  return (
    <div>
       <Header/>
          <Outlet/>
       <Footer/>
    </div>
  )
};

export default Layout;
