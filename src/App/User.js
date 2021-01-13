import React from 'react';
import Welcome from './User/Welcome';

class User extends React.Component
{
    render()
    {
      return <Welcome isSignedIn={this.getIsSignedIn()} />;
    }

    getIsSignedIn()
    {
      return true;
    }
}

export default User;
