import React from 'react';
import PokemonList from '../../src/components/PokemonList';
import Pokemon from '../../src/components/Pokemon';

describe('PokemonList', () => {
  it('should show a ul with a list of Pokemon Components', () => {
    let list = mount(
      <PokemonList
        currentFilter="Showmethemoney"
        pokemon={[{id:1,name:"lolachu",caught:"soverymuchso"}]}
        onPokemonClick={()=>{}}
      />
    );
    expect(list.find('ul').length).toEqual(1);
    expect(list.find(Pokemon).length).toEqual(1);
  });
});
