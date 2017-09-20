import React from 'react';
import Pokemon from '../../src/components/Pokemon';

describe('Pokemon', () => {
  it('should show an li but not an img for uncaught pokemon', () => {
    let list = mount(
      <Pokemon
        caught={false}
        name="Danny Devito"
        id="9001"
        onClick={()=>{}}
      />
    );
    expect(list.find('li').length).toEqual(1);
    expect(list.find('img').length).toEqual(0);
  });
  it('should show an li and an img for caught pokemon', () => {
    let list = mount(
      <Pokemon
        caught={true}
        name="Danny Devito"
        id="9001"
        onClick={()=>{}}
      />
    );
    expect(list.find('li').length).toEqual(1);
    expect(list.find('img').length).toEqual(1);
  });
});
