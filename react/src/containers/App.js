import React, { Component } from 'react'

import Sidebar from '../components/Sidebar'
import PokemonList from '../components/PokemonList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentFilter: "SHOW_ALL",
      pokemon: [
        { id: 1, name: "Bulbasaur", caught: false },
        { id: 4, name: "Charmander", caught: false },
        { id: 7, name: "Squirtle", caught: false }
      ]
    }
    this.setFilter = this.setFilter.bind(this)
    this.toggleCaught = this.toggleCaught.bind(this)
  }

  setFilter(filter){
    this.setState({currentFilter: filter})
  }

  toggleCaught(id){
    let newPokemon = this.state.pokemon.map(pokemon => {
      if(pokemon.id === id){
        return {...pokemon, caught: !pokemon.caught}
      }else {
        return pokemon
      }
    })
    this.setState({pokemon: newPokemon})
  }

  render(){
    const getVisiblePokemon = (pokemon, filter) => {
      switch (filter) {
        case 'SHOW_ALL':
          return pokemon
        case 'SHOW_CAUGHT':
          return pokemon.filter(p => p.caught)
        case 'SHOW_YET_TO_CATCH':
          return pokemon.filter(p => !p.caught)
      }
    }

    const visiblePokemon = getVisiblePokemon(this.state.pokemon,this.state.currentFilter)

    return(
      <div>
        <PokemonList
          currentFilter={this.state.currentFilter}
          pokemon={visiblePokemon}
          toggleHandler={this.toggleCaught}
        />
        <Sidebar
          filterHandler={this.setFilter}
          currentFilter={this.state.currentFilter}
        />
      </div>
    )
  }
}

export default App
