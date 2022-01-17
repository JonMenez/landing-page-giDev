import * as React from 'react'
import Header from '@containers/Header'
import '@styles/app.scss'
import Hero from '@containers/Hero'
import Services from './Services'
import Projects from './Projects'

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Projects />
        </div>
    )
}

export default App
