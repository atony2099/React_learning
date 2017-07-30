import React from 'react'
import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component {


//    事件绑定
//  1. 父组件通过pros向子组件传值
//  2. 父组件如果传递的是一个方法，子组件拿到那个方法调用 【回调(block)】;
//  3. {...this.props} 额外定义属性
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

       <BodyChild {...this.props} changeChildValue = {this.changeChildValue.bind(this)}/>
     </div>
   )
 }


}
