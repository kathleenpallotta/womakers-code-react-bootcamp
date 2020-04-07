import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import './App.css'
import {Container} from './components/Container.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container/>
      </div>
    </Provider>
  );
}

export default App;
