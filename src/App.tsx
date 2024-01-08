import './App.css'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Contact from './pages/contact'
import Home from './pages/home'
import { Projects } from './pages/projects'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Projects />
      <Contact />
    </>
  )
}

export default App
