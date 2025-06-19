import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header1 from './pages/headr'
import Main from './pages'
import Footer from './pages/Foter'
import About from './pages/about'
import Four0Four from './pages/404'
import Blogs from './pages/bloges'
import Bmicalculator from './pages/BmiCalculater'
import ClassDetails from './pages/Classdetails'
import ClassTimetable from './pages/Classtimetable'
import Contactdetails from './pages/contact'
import Galary from './pages/gallary'
import Servicess from "./pages/service"
import './App.css'
import Team from "./pages/team"

function App() {
  return (
    <Router>
<Header1/>
      <Routes>
        <Route path='/' element={<Main />} />
      
        <Route path='/About' element={<About />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Bmicalculator' element={<Bmicalculator />} />
        <Route path='/ClassDetails' element={<ClassDetails />} />
        <Route path='/ClassTimetable' element={<ClassTimetable />} />
        <Route path='/Contactdetails' element={<Contactdetails />} />
        <Route path='/Galary' element={<Galary />} />
        <Route path='/Servicess' element={<Servicess />} />
        <Route path='/Team' element={<Team />} />

      
        <Route path='*' element={<Four0Four />} />
      </Routes>

      {/* Optional: <Footer /> */}
    </Router>
  )
}

export default App
