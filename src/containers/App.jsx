import * as React from 'react'
import Header     from '@containers/Header'
import Hero       from '@containers/Hero'
import Services   from '@containers/Services'
import Projects   from '@containers/Projects'
import Feedback   from '@containers/Feedback'
import Contact    from '@containers/Contact'
import '@styles/app.scss'

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Projects />
            <Feedback />
            <Contact />
        </div>
    )
}

export default App
