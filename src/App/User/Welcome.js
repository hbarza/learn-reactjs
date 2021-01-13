import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
import User from './Model/User';

class Welcome extends React.Component
{
    isSignedIn;

    constructor(props)
    {
        super(props);

        this.isSignedIn = props.isSignedIn;
    }

    render ()
    {
        if (!this.isSignedIn) {
            return <GuestGreeting />
        }

        this.fetchUser();
        return <UserGreeting firstname={this.firstname} lastname={this.lastname}/>
    }

    fetchUser()
    {
        let user = new User();
        ({
            firstname: this.firstname, 
            lastname: this.lastname
        } = user.user);
    }
}

export default Welcome;
