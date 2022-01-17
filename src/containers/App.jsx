import * as React from 'react'
import Header from '@containers/Header'
import '@styles/app.scss'
import Hero from '@containers/Hero'
import Services from './Services'
import Projects from '@containers/Projects'
import Feedback from '@containers/Feedback'

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Projects />
            <Feedback />
        </div>
    )
}

export default App
