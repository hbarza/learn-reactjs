import React from 'react';

class TodoList extends React.Component
{
    items = ['First', 'Second', 'Third', 'Forth', 'Fifth'];
    
    render()
    {
        let items = this.items.map((item, index) => <li key={index}>{item}</li>);
        return (
            <ul>{items}</ul>
        );
    }
}

export default TodoList;
