import React from 'react';
import User from './User';
import Clock from './Time/Clock';
import Logo from './Layout/Logo';
import Content from './Layout/Content';

class Layout extends React.Component
{
    render()
    {
        return (
            <div className="one-page">
                <header className="App-header">
                    <User />
                    <Clock />
                    <Logo />
                    <Content />
                </header>
            </div>
        );
    }
}

export default Layout;
