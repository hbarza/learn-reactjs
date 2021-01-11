import React from 'react';

class Welcome extends React.Component
{
    constructor(props)
    {
        super(props);
        this.formatName = this.formatName.bind(this);
        ({
            name: this.firstname = 'You', 
            family: this.lastname = 'Stranger'
        } = this.props.user);
    }

    render ()
    {
        return <h1>Welcome, {this.formatName()}!</h1>
    }

    formatName()
    {
        return this.firstname + ' ' + this.lastname;
    }
}

export default Welcome;
