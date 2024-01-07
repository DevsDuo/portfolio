import './App.css'
import Button from './components/Button'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Home from './pages/home'
import { Projects } from './pages/projects'

function App() {
  return (
    <>
      <Header />
      <Button />
      <Home />
      <AboutUs />
      <Projects />
    </>
  )
}

export default App
