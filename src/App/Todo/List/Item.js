import React from 'react';

class Item extends React.Component
{
    render()
    {
        return <li>{this.props.item.value}</li>
    }
}

export default Item;
