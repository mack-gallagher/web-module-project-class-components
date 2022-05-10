import React from 'react';
import TodoList from './TodoList.js';
import Form from './Form.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.todoList = [];
    this.state.currID = 0;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  toggleCompleted(evt) {

    this.setState((state, props) => {
      const notme = this.state.todoList.filter(x => !(x.id === parseInt(evt.target.id)));
      const me = this.state.todoList.filter(x => x.id === parseInt(evt.target.id))[0];

      console.log(me);

      return {
        todoList: [...notme,
          { 
            'name': me.name,
            'id': me.id,
            'completed': !(me.completed),
          }
        ].sort((a,b) => { return a.id-b.id })
      }
    });


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
  }

  clearCompleted(evt) {
    evt.preventDefault();
    this.setState((state, props) => {
      const newList = this.state.todoList.filter(x => x.completed === false && x.name);

      return {
        'todoList': [...newList],
        currID: this.state.currID
      }
    });

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
