import React from 'react'

import Pokemon from './Pokemon'

const PokemonList = ({currentFilter, pokemon, toggleHandler}) => {
  let pokemonComponents = pokemon.map(pokemon => {
    return(
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        caught={pokemon.caught}
        onClick={toggleHandler}
      />
    )
  })
  return(
    <ul>
      {pokemonComponents}
    </ul>
  )
}

export default PokemonList
