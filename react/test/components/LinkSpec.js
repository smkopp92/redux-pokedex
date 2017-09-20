import React from 'react';
import Link from '../../src/components/Link';

describe('Link', () => {
  it('should show a span if the filter matches the current filter', () => {
    let link = mount(
      <Link
        filter="Showmethemoney"
        onClick={()=>{}}
        currentFilter="Showmethemoney"
      >
        Showmethemoney
      </Link>
    );
    expect(link.find('span').length).toEqual(1);
    expect(link.find('span').text()).toEqual("Showmethemoney");
  });
  it('should show a link if the filter does not match the current filter', () => {
    let link = mount(
      <Link
        filter="Yabadabadoo"
        onClick={()=>{}}
        currentFilter="Showmethemoney"
      >
        Showmethemoney
      </Link>
    );
    expect(link.find('a').length).toEqual(1);
    expect(link.find('a').text()).toEqual("Showmethemoney");
  });
});
