import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';
import User from '../User';

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
            name: this.firstname = 'You', 
            family: this.lastname = 'Stranger'
        } = user.getUser());
    }
}

export default Welcome;
