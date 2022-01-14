import * as React from 'react'
import Header from '@containers/Header'
import '@styles/app.scss'
import Hero from '@containers/Hero'
import Services from './Services'

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services/>
            
        </div>
    )
}

export default App
