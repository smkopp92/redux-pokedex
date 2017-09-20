import React from 'react'

import Pokemon from './Pokemon'

const PokemonList = ({currentFilter, pokemon, onPokemonClick}) => {
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
    <ul className="pokedex">
      {pokemonComponents}
    </ul>
  )
}

export default PokemonList
