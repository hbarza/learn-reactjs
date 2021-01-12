import React from 'react';
import User from './User';
import Logo from './Layout/Logo';
import Content from './Layout/Content';
import './Clock';

class Layout extends React.Component
{
    render()
    {
        return (
            <div className="one-page">
                <User />
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
