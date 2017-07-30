var React = require('react');
var ReactDOM = require('react-dom');
// import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentHeader from './components/header'
import BodyContent from './components/body';

class Index extends React.Component{

  render() {
   var header = <ComponentHeader/>;
   var body = <BodyContent address= {"东大桥"} age = {"我是"}/>;
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
