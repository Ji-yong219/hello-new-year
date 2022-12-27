import PropTypes from 'prop-types'

function MoneyButton({ src, isActive, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={src} style={isActive ? null : { filter: 'grayscale(90%)' }} />
    </div>
  )
}

MoneyButton.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default MoneyButton
