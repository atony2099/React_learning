import React from 'react'
import ReactDom from "react-dom"
import BodyChild from './bodyChild';

const defaultValue = {
  age : "这是一个默认值"
};

export default class BodyIndex extends React.Component {

  constructor(){
    super();
    this.state = {
      // 内部定义的属性
      userName : "lili"
    };
  }

  changeUserInfo(age){
    this.setState({userName:age})
    // 操作dom 的第一种方式
    // var submitButton = document.getElementById("sButton");
    // ReactDom.findDOMNode(submitButton).style.color = "red";

    //
    this.refs.sButton.style.background = "blue";


  }

  changeChildValue(event){
    this.setState({userNawme:event.target.value})
  }


 render(){
     return (
       <div>
         <h1>{this.state.userName}{this.props.age}{this.props.address}</h1>
         <input id ="sButton" ref = "sButton" type= "button" value = "提交" onClick = {this.changeUserInfo.bind(this,100)} />
         <BodyChild changeChildValue = {this.changeChildValue.bind(this)}/>
       </div>
     )
 }
}


// =========== 1.有效性验证， 需验证
BodyIndex.propTypes = {
    age: React.PropTypes.string.isRequired
};

// ============= 2.配置默认值
BodyIndex.defaultProps = defaultValue;
