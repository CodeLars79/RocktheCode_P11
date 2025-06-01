import './Map.css'
import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const Map = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_API_KEY,
      version: 'weekly'
    })

    loader.load().then(() => {
      const google = window.google
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 41.3874, lng: 2.1686 },
        zoom: 12,
        scrollwheel: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          }
        ]
      })

      const customIcon = {
        url: '/assets/pin.png',
        scaledSize: new google.maps.Size(25, 30)
      }
      const infoWindow = new google.maps.InfoWindow()

      const locations = [
        {
          position: { lat: 41.4036, lng: 2.1744 },
          title: 'Sagrada Família',
          photo: '/assets/Sagrada-Familia.JPG',
          link: 'https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia'
        },
        {
          position: { lat: 41.39177, lng: 2.16493 },
          title: 'Casa Batlló',
          photo: '/assets/Casa-Batllo.JPG',
          link: 'https://en.wikipedia.org/wiki/Casa_Batll%C3%B3'
        },
        {
          position: { lat: 41.39524, lng: 2.16199 },
          title: 'Casa Milà',
          photo: '/assets/La-Pedrera.JPG',
          link: 'https://en.wikipedia.org/wiki/Casa_Mil%C3%A0'
        },
        {
          position: { lat: 41.36388, lng: 2.02799 },
          title: 'Colonia Güell',
          photo: '/assets/Colonia-Guell.JPG',
          link: 'https://en.wikipedia.org/wiki/Col%C3%B2nia_G%C3%BCell'
        },
        {
          position: { lat: 41.40346, lng: 2.1507 },
          title: 'Casa Vicens',
          photo: '/assets/Casa-Vicens.JPG',
          link: 'https://en.wikipedia.org/wiki/Casa_Vicens'
        },
        {
          position: { lat: 41.3789, lng: 2.17423 },
          title: 'Palau Güell',
          photo: '/assets/Palau-Guell.JPG',
          link: 'https://en.wikipedia.org/wiki/Palau_G%C3%BCell'
        },
        {
          position: { lat: 41.41447, lng: 2.15372 },
          title: 'Parc Güell',
          photo: '/assets/Park-Guell.JPG',
          link: 'https://en.wikipedia.org/wiki/Park_G%C3%BCell'
        }
      ]

      locations.forEach(({ position, title, photo, link }) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title,
          icon: customIcon
        })

        const content = `
  <div class="info-window">
    <h3>${title}</h3>
    <img src="${photo}" alt="${title}" />
    <a href="${link}" target="_blank">Learn more</a>
  </div>
`

        marker.addListener('click', () => {
          infoWindow.setContent(content)
          infoWindow.open(map, marker)
        })
      })
    })
  }, [])

  return (
    <section className='map'>
      <div ref={mapRef} className='map-container' />
    </section>
  )
}

export default Map
