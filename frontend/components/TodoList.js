import React from 'react'
import Todo from './Todo.js'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='TodoList'>
        { this.props.list.map((x, idx) => 
            <Todo 
              name={ x.name }
              id={ x.id }
              completed={ x.completed }
              key={ idx.toString() }
              toggleCompleted={ this.props.toggleCompleted }
            />
        ) }
      </div>
    )
  }
}
