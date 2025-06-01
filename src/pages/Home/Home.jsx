import './Home.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleMap = () => {
    navigate('/map')
  }

  const handleBuildings = () => {
    navigate('/buildings')
  }

  const handleAbout = () => {
    navigate('/about')
  }

  return (
    <>
      <section className='home'>
        <div className='home-hero'>
          <img
            src='/assets/AntoniGaudi.jpg'
            alt='Antoni Gaudí'
            className='antoni-gaudi-image'
          />

          <div className='hero-text'>
            <h1>Discover the extraordinary architectural legacy of</h1>
            <img
              src='/assets/signature.png'
              alt='Gaudí Signature'
              className='signature'
            />
          </div>
        </div>
      </section>

      <section className='home-map'>
        <h2>The locations</h2>
        <p>
          Antoni Gaudí is celebrated as the foremost figure of Catalan
          Modernism, with most of his iconic works located in Barcelona, Spain.
          The still-unfinished Sagrada Família stands as the most-visited
          monument in the country. Explore the map to discover the locations of
          all the masterpieces.
        </p>
        <Button onClick={handleMap}>Map</Button>
      </section>

      <section className='home-projects'>
        <h2>The architecture</h2>
        <p>
          Gaudí left an indelible mark on the world of art and architecture.
          Over the years, seven of his creations have been recognized as UNESCO
          World Heritage Sites. Discover the architectural wonders!
        </p>

        <Button onClick={handleBuildings}>Buildings</Button>
      </section>

      <section className='home-about'>
        <h2>About</h2>
        <p>
          Antoni Gaudí's work continues to inspire global admiration. This site
          is a tribute to his architecture, artistic vision, and unmistakable
          cultural legacy. No ads and completely free.
        </p>
        <Button onClick={handleAbout}>Learn more</Button>
      </section>
    </>
  )
}

export default Home
