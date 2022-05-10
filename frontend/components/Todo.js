import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className='Todo' id={this.props.id} onClick={ this.props.toggleCompleted } >
        <p id={this.props.id.toString()} className={ this.props.completed?'completed':'' }>
          { this.props.name } { this.props.completed?'[X]':'[]' }
        </p>
      </div>
    )
  }
}
