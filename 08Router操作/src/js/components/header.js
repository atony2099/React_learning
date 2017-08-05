import React from 'react'
import {Link} from 'react-router';

export default class ComponentHeader extends React.Component {

  render() {

    return (
      <header>
        <h1>这里是头部</h1>
        <ul>
          <li><Link to={`/`}>首页</Link></li>
          <li><Link to={`/list`}>列表页面</Link></li>
        </ul>
      </header>
    )
}



}
