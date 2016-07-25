import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import HomePage from './HomePage.js'; 

describe('Home Page', () => { 
  const wrapper = shallow(<HomePage />);
  it('has title', () => {
    const title = wrapper.find('h1').first();
    expect(title.text())
      .toEqual('Kasih.in'); 
  });
  it('has tagline', () => {
    const tagline = wrapper.find('h2').first();
    expect(tagline.text())
      .toEqual('Helping is easy.'); 
  });
  it('has description', () => {
    const description = wrapper;
    expect(description.contains([
      <i><b>Kasih.in is a platform to help you helping people.</b></i>
    ])
    ).toBe(true);
  });
});
