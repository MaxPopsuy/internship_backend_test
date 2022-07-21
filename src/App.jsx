import React, { Component } from 'react'
import Test from './components/Test/Test';
import Form from './components/Form/Form';
import Managers from './components/Managers/Managers';
import Delete from './components/Delete/Delete';

class App extends Component {
  render() { 
    return (
      <>
      <Form/>
      <Managers/>
      <Delete/>
      </>
    );
  }
}
 
export default App;