import React from 'react'

import FilterLink from '../containers/FilterLink'

const Sidebar = () => {
  return(
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_CAUGHT">
        Caught
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_YET_TO_CATCH">
        Left to Catch
      </FilterLink>
    </p>
  )
}

export default Sidebar
