import styled from 'styled-components'
import PropTypes from 'prop-types'

function MaterialIcon({ iconName, color = '--white', sx = 2 }) {
  return (
    <span
      className="material-icons"
      style={{
        fontSize: `max(${sx * 0.6}rem, ${sx * 12}px)`,
        color: `var(${color})`,
      }}
    >
      {iconName}
    </span>
  )
}

MaterialIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
  sx: PropTypes.number,
}

export default MaterialIcon
