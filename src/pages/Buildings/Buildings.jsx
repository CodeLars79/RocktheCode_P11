import { useState } from 'react'
import './Buildings.css'
import Card from '../../components/Card/Card'

const buildingList = [
  {
    name: 'Sagrada Família',
    location: 'Barcelona, Spain',
    year: '1883-present',
    image: '/assets/Sagrada-Familia.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sagrada_Família'
  },
  {
    name: 'Casa Vicens',
    location: 'Barcelona, Spain',
    year: '1883-1888',
    image: '/assets/Casa-Vicens.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Casa_Vicens'
  },
  {
    name: 'Palau Güell',
    location: 'Barcelona, Spain',
    year: '1885-1890',
    image: '/assets/Palau-Guell.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Palau_G%C3%BCell'
  },
  {
    name: 'Park Güell',
    location: 'Barcelona, Spain',
    year: '1900-1914',
    image: '/assets/Park-Guell.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Park_G%C3%BCell'
  },
  {
    name: 'Casa Batlló',
    location: 'Barcelona, Spain',
    year: '1904-1906',
    image: '/assets/Casa-Batllo.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Casa_Batll%C3%B3'
  },
  {
    name: 'Casa Milà',
    location: 'Barcelona, Spain',
    year: '1906-1912',
    image: '/assets/La-Pedrera.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Casa_Mil%C3%A0'
  },
  {
    name: 'Church of Colonia Güell',
    location: 'Santa Coloma de Cervelló, Spain',
    year: '1908-1914',
    image: '/assets/Colonia-Guell.JPG',
    wikiUrl: 'https://en.wikipedia.org/wiki/Church_of_Col%C3%B2nia_G%C3%BCell'
  }
]

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('az')

  const filteredList = buildingList
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'az') {
        return a.name.localeCompare(b.name)
      } else if (sortOption === 'za') {
        return b.name.localeCompare(a.name)
      } else if (sortOption === 'year') {
        const yearA = parseInt(a.year.split('-')[0])
        const yearB = parseInt(b.year.split('-')[0])
        return yearA - yearB
      } else {
        return 0
      }
    })

  return (
    <>
      <section className='title'>
        <img src='./assets/icon.png' alt='Icon' className='icon-img' />
        <h2>Architectural Masterpieces</h2>
        <p>
          Explore the iconic works of Antoni Gaudí, a visionary architect whose
          creations have left an indelible mark on the world.
        </p>
      </section>

      <section className='controls-wrapper'>
        <div className='controls'>
          <input
            type='text'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value='az'>Name: A-Z</option>
            <option value='za'>Name: Z-A</option>
            <option value='year'>Year</option>
          </select>
        </div>
      </section>

      <section className='projects'>
        <div className='cards'>
          {filteredList.map((project) => (
            <Card
              key={project.name}
              image={project.image}
              name={project.name}
              location={project.location}
              year={project.year}
              wikiUrl={project.wikiUrl}
              onLearnMore={() => window.open(project.wikiUrl, '_blank')}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
