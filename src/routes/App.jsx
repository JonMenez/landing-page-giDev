import * as React   from 'react'
import {  
    BrowserRouter, 
    Routes, 
    Route }         from 'react-router-dom'
import Layout       from '@containers/Layout'
import Home         from '@pages/Home'
import Error404     from '@pages/Error404'
import ProjectsPage from '@pages/ProjectsPage'
import Form         from '@pages/Form'
import '@styles/app.scss'

const App = () => {
    return (
        <div>
          <BrowserRouter
          basename='/'
          >
            <Layout>
                <Routes>
                  <Route path='/' element={ <Home/> } />
                  <Route path='/projects' element={ <ProjectsPage/> } />
                  <Route path='/projects/*' element={ <ProjectsPage/> } />
                  <Route path='/form' element={ <Form /> } />
                  <Route path='*' element={ <Error404/> } />
                </Routes>
            </Layout>
          </BrowserRouter>
        </div>
    )
}

export default App
