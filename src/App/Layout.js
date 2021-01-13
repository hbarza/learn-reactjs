import React    from 'react';
import User     from './User';
import Clock    from './Time/Clock';
import Logo     from './Layout/Logo';
import Content  from './Layout/Content';
import TodoList from './Todo/List';

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
                    <TodoList />
                </header>
            </div>
        );
    }
}

export default Layout;
