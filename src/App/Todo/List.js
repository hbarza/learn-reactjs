import React from 'react';
import Item  from './List/Item';
import './List.css';

class TodoList extends React.Component
{
    items = [
        {id: '001', value: 'First Item'},
        {id: '002', value: 'Second Item'},
        {id: '003', value: 'Third Item'},
        {id: '004', value: 'Forth Item'},
        {id: '005', value: 'Fifth Item'},
    ];
    
    render()
    {
        return (
            <ul className="todo-list">
                {this.items.map(
                    (item) => <Item key={item.id} item={item}/>
                )}
            </ul>
        );
    }
}

export default TodoList;
