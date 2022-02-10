import * as React        from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimatePage from './AnimatePage'
import '@styles/app.scss'

const App = () => {
    return (
        <div className='app'>
          <BrowserRouter>
               <AnimatePage />
          </BrowserRouter>
        </div>
    )
}

export default App
