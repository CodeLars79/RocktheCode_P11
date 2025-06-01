import './Card.css'
import Button from '../Button/Button'

const Card = ({ image, name, location, year, wikiUrl }) => {
  const handleLearnMore = () => {
    window.open(wikiUrl, '_blank')
  }

  return (
    <div className='card'>
      <img src={image} alt={name} className='image' />
      <div className='content'>
        <h3 className='name'>{name}</h3>
        <p className='location'>{location}</p>
        <p className='year'>{year}</p>
        <Button onClick={handleLearnMore}>Learn more</Button>
      </div>
    </div>
  )
}

export default Card
