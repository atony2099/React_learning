import React from 'react'
export default class BodyChild extends React.Component {

  render(){
    return(
      <div>
      <p>
        请输入1111:
        <input type = "text" onChange = {this.props.changeChildValue} />
      </p>
      </div>
    )
  }
}
