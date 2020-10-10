import React from 'react';
import './App.css';
import Header from './components/Header'
import Generator from './components/generator/Index'


class App extends React.Component {
  state = {}

  render(){
    return (
      <>
      <Header />
      <Generator />
      </>
    )
  }
}

export default App;
