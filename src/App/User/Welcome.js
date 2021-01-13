import React        from 'react';
import UserGreeting from './UserGreeting';
import User         from './Model/User';

class Welcome extends React.Component
{
    render ()
    {
        if (!this.props.isSignedIn) {
            return null;
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
        } = user.getUser());
    }
}

export default Welcome;
