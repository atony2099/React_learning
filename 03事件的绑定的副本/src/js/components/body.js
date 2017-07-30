import React from 'react'
import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component {


//    事件反向绑定
//
//  1.. 父组件定义一个方法，子组件回调(block);
//  2.
//
// /
//
//
//



  constructor(){
    super();
    this.state = {
      // 内部定义的属性
      userName : "lili"
    };
  }

changeUserInfo(age){
  this.setState({userName:age})
}

changeChildValue(event){
  this.setState({userNawme:event.target.value})
}


 render(){

   return (
     <div>
       <h1>{this.state.userName}{this.props.age}{this.props.address}</h1>
       <input type= "button" value = "提交" onClick = {this.changeUserInfo.bind(this,100)} />
       <BodyChild changeChildValue = {this.changeChildValue.bind(this)}/>
     </div>
   )
 }


}
