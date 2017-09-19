import React from 'react'

const Link = ({filter, onClick, currentFilter, children}) => {
  if (filter===currentFilter) {
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
