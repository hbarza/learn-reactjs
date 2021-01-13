import React from 'react';

class SignOutButton extends React.Component
{
    render()
    {
        return (
            <button onClick={this.props.onClick}>
                Sign Out
            </button>
        );
    }
}

export default SignOutButton;
