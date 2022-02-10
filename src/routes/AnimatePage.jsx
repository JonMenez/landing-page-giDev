import * as React          from 'react'
import { Routes, Route, useLocation }   from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop         from '@services/ScrollToTop'
import Layout              from '@containers/Layout'
import Home                from '@pages/Home'
import ProjectsPage        from '@pages/ProjectsPage'
import ServicesPage        from '@pages/ServicesPage'
import Form                from '@pages/Form'
import Error404            from '@pages/Error404'
import ProjectDetail       from '@pages/ProjectDetail'

const AnimatePage = () => {

    const location = useLocation()

    return (
        <>
            <AnimatePresence exitBeforeEnter>
            <ScrollToTop/>
            <Routes  location={ location } key={ location.key } >
              <Route path='/' element={ <Layout /> }>
                <Route index element={ <Home/> } />
                <Route path='projects' element={ <ProjectsPage/> } />
                <Route path='projects/*' element={ <ProjectDetail/> } />
                <Route path='services' element={ <ServicesPage /> } />
                <Route path='contact' element={ <Form /> } />
                <Route path='*' element={ <Error404/> } />
              </Route>
            </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatePage