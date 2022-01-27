import * as React from 'react'
import Layout from '@containers/Layout'
import Home   from '@containers/Home'
import '@styles/app.scss'

const App = () => {
    return (
        <div>
            <Layout>
               <Home />
            </Layout>
        </div>
    )
}

export default App
