import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div id='header'>
        {props.header}
    </div>
  )
}

export default Header