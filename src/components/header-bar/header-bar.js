import React from 'react';
import './header-bar.scss';
class HeaderBar extends React.Component {

  render() {
    return (
      <header className="c-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}

export default HeaderBar;