import React from 'react'

const Link = ({active, onClick, children, filter}) => {
  if (active) {
    return <span>{children}</span>
  } else {
    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          onClick(filter)
        }}
      >
        {children}
      </a>
    )
  }
}

export default Link
