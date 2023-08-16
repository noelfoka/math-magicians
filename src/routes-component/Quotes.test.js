import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quotes'; // Adjust the import path

describe('Quote component', () => {
  it('should match QUOTE snapshot', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
