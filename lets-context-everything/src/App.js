import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {clickButton} from './actions'
import {bindActionCreators} from 'redux'

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const {newValue, clickButton} = this.props
    const {inputValue} = this.state

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input onChange={this.inputChange} value={inputValue} type='text' />
        <button onClick={()=> clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Criamos o método mapDispatchToProps para converter a Action Creator 
// clickButton que criamos no arquivo src/actions/index.js em uma prop para o componente.
// O método bindActionCreators facilita este trabalho. Ao clicar no botão Click me!, o 
// valor do state inputValue que foi alterado pelo input text é enviado à Store pelo método 
// clickButton, que foi mapeado no componente como prop.