class User
{
    _user = {
        name: 'Omid',
        family: 'Barza'
    }

    get user()
    {
        let userMap = {};
        
        ({
            name: userMap.firstname = 'You',
            family: userMap.lastname = 'Stranger'
        } = this._user); 
        // in fact user data will fetch from server later

        return userMap;
    }
}

export default User;
