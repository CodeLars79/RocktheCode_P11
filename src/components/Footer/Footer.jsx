import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-columns'>
        <div className='footer-column'>
          <img src='./assets/logo.png' alt='Logo' className='footer-logo' />
          <span className='footer-logo-text'>FINDING GAUDI</span>
        </div>

        <div className='footer-column'>
          <h4>Contact</h4>
          <p>E: hello@finding-gaudi.com</p>
          <p>T: +34 123 456 789</p>
          <p>Barcelona, Spain</p>
        </div>

        <div className='footer-column'>
          <h4>Legal</h4>
          <p>Private Policy</p>
          <p>Terms of Use</p>
          <p>Cookies</p>
        </div>

        <div className='footer-column'>
          <h4>Social</h4>
          <p>
            <a href='#'>Instagram</a>
          </p>
          <p>
            <a href='#'>Pinterest</a>
          </p>
          <p>
            <a href='#'>LinkedIn</a>
          </p>
        </div>
      </div>
      <p className='footer-copy'>
        &copy; {new Date().getFullYear()} Finding Gaudí
      </p>
    </footer>
  )
}
