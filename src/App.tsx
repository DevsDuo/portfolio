import './App.css'
import Button from './components/Button'
import Header from "./components/Header"
import { AboutUs } from './pages/about_us'
import Home from './pages/home'

function App() {
  return (
    <>
      <Header />
      <Button />
      <Home />
      <AboutUs />
    </>
  )
}

export default App
