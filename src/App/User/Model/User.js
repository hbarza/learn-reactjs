class User
{
    user = {
        name: 'Omid',
        family: 'Barza'
    }

    getUser()
    {
        // in fact user data will fetch from server later
        let user    = this.user;
        let userMap = {};
        
        ({
            name: userMap.firstname = 'You',
            family: userMap.lastname = 'Stranger'
        } = user);

        return userMap;
    }
}

export default User;
