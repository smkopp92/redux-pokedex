import React from 'react'

import Sidebar from '../components/Sidebar'
import VisiblePokemonList from '../containers/VisiblePokemonList'

const App = () => {
  return(
    <div>
      <VisiblePokemonList />
      <Sidebar />
    </div>
  )
}

export default App
