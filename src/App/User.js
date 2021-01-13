import React          from 'react';
import Welcome        from './User/Welcome';
import SignInButton   from './User/SignInButton';
import SignOutButton  from './User/SingOutButton';
import SignInWarning  from './User/SignInWarning';
import './User/User.css';

class User extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {isSignedIn: false}

      this.handleSignInClick  = this.handleSignInClick.bind(this);
      this.handleSignOutClick = this.handleSignOutClick.bind(this);
    }

    render()
    {
      const isSignedIn = this.state.isSignedIn;
      let button = isSignedIn
        ? <SignOutButton onClick={this.handleSignOutClick} />
        : <SignInButton onClick={this.handleSignInClick}/>

      return (
        <div>
          <SignInWarning isSignedIn={isSignedIn}/>
          <Welcome isSignedIn={isSignedIn} />
          {button}
        </div>
      );
    }

    handleSignInClick()
    {
      this.setState({isSignedIn: true});
    }

    handleSignOutClick()
    {
      this.setState({isSignedIn: false});
    }
}

export default User;
