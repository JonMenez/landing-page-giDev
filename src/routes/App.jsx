import * as React   from 'react'
import {  
    BrowserRouter, 
    Routes, 
    Route }         from 'react-router-dom'
import Layout       from '@containers/Layout'
import Home         from '@pages/Home'
import ProjectsPage from '@pages/ProjectsPage'
import ServicesPage from '@pages/ServicesPage'
import Form         from '@pages/Form'
import Error404     from '@pages/Error404'
import ProjectDetail from '../pages/ProjectDetail'
import ScrollToTop  from '@services/ScrollToTop'
import '@styles/app.scss'

const App = () => {
    return (
        <div className='app'>
          <BrowserRouter
          basename='/'
          >
            <Layout>
                <ScrollToTop/>
                <Routes>
                  <Route path='/' element={ <Home/> } />
                  <Route path='/projects' element={ <ProjectsPage/> } />
                  <Route path='/projects/*' element={ <ProjectDetail/> } />
                  <Route path='/services' element={ <ServicesPage /> } />
                  <Route path='/contact' element={ <Form /> } />
                  <Route path='*' element={ <Error404/> } />
                </Routes>
            </Layout>
          </BrowserRouter>
        </div>
    )
}

export default App
