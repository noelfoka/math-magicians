import { Component } from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <Quote />
        <Calculator />
      </>
    );
  }
}

export default App;
