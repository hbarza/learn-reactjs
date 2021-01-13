import React from 'react';

class UserGreeting extends React.Component
{
    render()
    {
        return <h1>Welcome {this.props.firstname} {this.props.lastname}</h1>;
    }
}

export default UserGreeting;
