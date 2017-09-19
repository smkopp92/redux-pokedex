import { connect } from 'react-redux'
import { toggleCaught } from '../actions/toggleCaught'
import PokemonList from '../components/PokemonList'

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

const mapStateToProps = state => {
  return {
    pokemon: getVisiblePokemon(state.pokemon, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPokemonClick: id => {
      dispatch(toggleCaught(id))
    }
  }
}

const VisiblePokemonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)

export default VisiblePokemonList
