import React from 'react'

import Link from './Link'

const Sidebar = ({filterHandler, currentFilter}) => {
  return(
    <div className="sidenav">
      <Link filter="SHOW_ALL" onClick={filterHandler} currentFilter={currentFilter}>
        All
      </Link>
      <Link filter="SHOW_CAUGHT" onClick={filterHandler} currentFilter={currentFilter}>
        Caught
      </Link>
      <Link filter="SHOW_YET_TO_CATCH" onClick={filterHandler} currentFilter={currentFilter}>
        Left to Catch
      </Link>
    </div>
  )
}

export default Sidebar
