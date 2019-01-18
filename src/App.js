import React, { Component } from 'react';

class App extends Component {
    render() {
        return <div className='app'>{this.props.motd}</div>;
    }
}

export default App;
