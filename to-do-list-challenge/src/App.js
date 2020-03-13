import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import InputToDo from './components/InputToDo'
import List from './components/List'
import './style.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="uk-panel uk-padding uk-background-primary uk-light">
            <h3 className="logo">To Do List</h3>
        </div>
        <InputToDo/>
        <div className="list-container">
              <List/>
        </div>
      </div>
    </Provider>
  )
}

export default App;
