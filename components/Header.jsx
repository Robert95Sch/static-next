import React from 'react'

import HeaderStyles from '../styles/components/Header.module.scss'

function Header({ title }) {
  return (
    <h1 className={HeaderStyles.header}>{title}</h1>
  )
}

export default Header