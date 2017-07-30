import React from 'react'
export default class BodyIndex extends React.Component {


  componentWillMount(){
    console.log("body"  + "++++++---componentWillMount");
  }

  componentDidMount(){
    console.log("body" + "componentDidMount" );
  }

   render(){
      var userName = "林笑笑";
      var shouldInput = false;
      var html = "hello\u0020world"
     return (
       <div>
         <h1>中间</h1>
        //  空字符串
         <p>{userName == '' ? "is empty" :  'userNameis' + userName } </p>
         <p><input type = "button" value="点击按钮" disabled = {shouldInput}/> </p>
         <p>{html}</p>
        {/*注释*/}
       </div>
     )

   }
}
