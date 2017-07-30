import React from 'react'
export default class BodyChild extends React.Component {

  render(){
    return(
      <div>
      <p>
        请输入:
        <input type = "text" onChange = {this.props.changeChildValue} />
      </p>
      </div>
    )
  }
}
