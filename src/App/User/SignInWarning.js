import React         from 'react';
import GuestGreeting from './GuestGreeting';

class SignInWraning extends React.Component
{
    render()
    {
        if (this.props.isSignedIn) {
            return null;
        }

        return (
            <h1 className="sign-in-warning">
                <GuestGreeting />
            </h1>
        );
    }
}

export default SignInWraning;
