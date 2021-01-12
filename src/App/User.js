import React from 'react';
import Welcome from './User/Welcome';

class User extends React.Component
{
    constructor(props)
    {
      super(props);

      // in fact user data will fetch from server later
      this.user = {
        name: 'Omid',
        family: 'Barza'
      }
    }

    render()
    {
        return <Welcome user={this.user} />;
    }
}

export default User;
