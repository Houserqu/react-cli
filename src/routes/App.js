import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* 此处可以引入全局通知组件 */}
        {this.props.children}
      </div>
    );
  }
}

export default App;