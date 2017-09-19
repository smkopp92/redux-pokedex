let initialState = [
  { id: 1, name: "Bulbasaur", caught: false },
  { id: 4, name: "Charmander", caught: false },
  { id: 7, name: "Squirtle", caught: false }
]

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CAUGHT':
      return state.map(pokemon =>
        (pokemon.id === action.id)
          ? {...pokemon, caught: !pokemon.caught}
          : pokemon
      )
    default:
      return state
  }
}

export default pokemon
