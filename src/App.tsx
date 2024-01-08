import './App.css'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Contact from './pages/contact'
import Home from './pages/home'
import { Projects } from './pages/projects'
import Skills from './pages/skills'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
