import React from 'react'

import Pokemon from './Pokemon'

const PokemonList = ({onPokemonClick, pokemon}) => {
  let pokemonComponents = pokemon.map(pokemon => {
    return(
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        caught={pokemon.caught}
        onClick={onPokemonClick}
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
