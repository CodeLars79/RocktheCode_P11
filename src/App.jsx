import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import GoToTop from './components/GoToTop/GoToTop'

import Home from './pages/Home/Home'
import Map from './pages/Map/Map'
import Buildings from './pages/Buildings/Buildings'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='map' element={<Map />} />
            <Route path='buildings' element={<Buildings />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
