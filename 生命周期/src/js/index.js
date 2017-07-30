var React = require('react');
var ReactDOM = require('react-dom');
// import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentHeader from './components/header'
import BodyContent from './components/body';

class Index extends React.Component{

componentWillMount(){
  console.log("Index"  + "componentWillMount");
}

componentDidMount(){
  console.log("Index" + "componentDidMount" );
}


  render() {
  /*
  var component;
  if (用户已登录) {
    component = <ComponentLoginedHeader/>
  }
  else{
    component = <ComponentHeader/>
  }
  */
   var header = <ComponentHeader/>;
   var body = <BodyContent/>;
   var footer = <ComponentFooter/>;

  return (
    <div>
      {header}
      {body}
      {footer}
    </div>
  );
}


}



ReactDOM.render(
  <Index/>,
  document.getElementById('google')
);
