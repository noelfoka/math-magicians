import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home component', () => {
  it('should match HOME snapshot', () => {
    render(<Home />);
    const home = screen.getByTestId('user-id');
    expect(home).toBeInTheDocument();
    expect(home).toHaveTextContent('History');
  });
});
