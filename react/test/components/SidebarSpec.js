import React from 'react';
import Sidebar from '../../src/components/Sidebar';
import Link from '../../src/components/Link';

describe('Sidebar', () => {
  it('should show three link Components', () => {
    let list = mount(
      <Sidebar
        currentFilter="Showmethemoney"
        filterHandler={()=>{}}
      />
    );
    expect(list.find(Link).length).toEqual(3);
  });
});
