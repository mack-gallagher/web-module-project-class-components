import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className='Todo' id={this.props.id} >
        <p className={ this.props.completed?'completed':'' }>
          { this.props.name }
        </p>
      </div>
    )
  }
}
