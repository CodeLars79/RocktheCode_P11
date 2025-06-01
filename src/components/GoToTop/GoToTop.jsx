import { useEffect, useState } from 'react'
import './GoToTop.css'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const GoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={GoToTop}
      aria-label='Scroll to top'
    >
      ↑
    </button>
  )
}

export default GoToTop
