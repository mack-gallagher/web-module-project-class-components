import React from 'react';
import TodoList from './TodoList.js';
import Form from './Form.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.todoList = [];
    this.state.currID = 0;

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleCompleted(evt) {
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState((state, props) => {
       return { 
               todoList: [...this.state.todoList,
               {
                 'name': evt.target[0].value,
                 'id': this.state.currID,
                 'completed': false,
               }],
               currID: this.state.currID + 1,
             };
    });
    console.log(this);
  }

  clearCompleted() {
    return function() {
      console.log('x');
    }
  }

  render() {
    return (
      <div>
        <TodoList 
          list={ this.state.todoList }
          toggleCompleted={ this.toggleCompleted }
        />
        <Form 
          handleSubmit={ this.handleSubmit }
          clearCompleted={ this.clearCompleted }
        />
      </div>
    )
  }
}
