import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopularSneakers from './components/PopularSneakers'
import Quality from './components/Quality'
import Services from './components/Services'

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <PopularSneakers />
      <Quality />
      <Services />
    </main> 
  )
}

export default App
