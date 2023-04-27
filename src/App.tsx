import { BrowserRouter ,Route} from 'react-router-dom'
import './index.css'
import { RoutesWithNotFounds } from './utilities'
import { PublicRoutes } from './models'
import {Suspense, lazy} from 'react'

const Home = lazy(() => import('./pages/public/Home/Home'))
const About = lazy(() => import('./pages/public/About/About'))


function App() {

  return (
    <BrowserRouter>
      <RoutesWithNotFounds>
        <Route path={PublicRoutes.HOME} element={<Home/>}/>
        <Route path={PublicRoutes.ABOUT} element={<About/>}/>
      </RoutesWithNotFounds>
    </BrowserRouter>
  )
}

export default App
