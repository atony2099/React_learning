import React from 'react'
export default class BodyIndex extends React.Component {


  constructor(){
    super();
    this.state = {
      // 内部定义的属性
      userName : "lili"
    };
  }
 render(){

   return (
     <div>
       <h1>{this.state.userName}{this.props.age}{this.props.address}</h1>
     </div>
   )
 }


}
