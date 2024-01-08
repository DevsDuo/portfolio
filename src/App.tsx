import './App.css'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Home from './pages/home'
import { Projects } from './pages/projects'

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Projects />
    </>
  )
}

export default App
