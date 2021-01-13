import React from 'react';

class SignInButton extends React.Component
{
    render()
    {
        return (
            <button onClick={this.props.onClick}>
                Sign In
            </button>
        );
    }
}

export default SignInButton;
