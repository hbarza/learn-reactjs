import React     from 'react';
import User      from './User';
import Clock     from './Time/Clock';
import Logo      from './Layout/Logo';
import Content   from './Layout/Content';
import TodoList  from './Todo/List';
import WaterBoil from './WaterBoil/CalculatorBlock';
import './Layout/Layout.css';

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
                    <WaterBoil />
                </header>
            </div>
        );
    }
}

export default Layout;
