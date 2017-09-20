import React from 'react'

import FilterLink from '../containers/FilterLink'

const Sidebar = () => {
  return(
    <div className="sidenav">
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <FilterLink filter="SHOW_CAUGHT">
        Caught
      </FilterLink>
      <FilterLink filter="SHOW_YET_TO_CATCH">
        Left to Catch
      </FilterLink>
    </div>
  )
}

export default Sidebar
