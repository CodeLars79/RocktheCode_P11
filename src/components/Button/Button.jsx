import './Button.css'

const Button = ({ onClick, className, children }) => {
  return (
    <button className={`button ${className || ''}`} onClick={onClick}>
      <span className='button-text'>{children}</span>
      <img src='./assets/arrow.svg' alt='' className='arrow-icon' />
    </button>
  )
}

export default Button
