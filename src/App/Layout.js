import React from 'react';
import Welcome from './Welcome';
import Logo from './Layout/Logo';
import Content from './Layout/Content';
import './Clock';

class Layout extends React.Component
{
    constructor(props)
    {
      super(props);
      this.user = {
        name: 'Hassan',
        family: 'Barza'
      }
    }

    render()
    {
        return (
            <div className="one-page">
                <Welcome user={this.user}/>
                <div id="clock"></div>
                <header className="App-header">
                    <Logo />
                    <Content />
                </header>
            </div>
        );
    }
}

export default Layout;
