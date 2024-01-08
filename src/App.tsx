import './App.css'
import Button from './components/Button'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  return (
    <>
      <Header />
      <Button />
      <Home />
      <AboutUs />
      <Contact />
    </>
  )
}

export default App
