import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Admin = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            This is admin
        </div>
    );
};

export default Admin;