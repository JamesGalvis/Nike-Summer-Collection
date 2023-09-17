import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PopularSneakers from './components/PopularSneakers'
import Quality from './components/Quality'

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <PopularSneakers />
      <Quality />
    </main> 
  )
}

export default App
