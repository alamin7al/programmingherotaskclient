import React, { useEffect, useState } from 'react';

import useAuth from '../Login/useAuth';
import Emailfilter from './Emailfilter';

const Myorder = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/singleemail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])


    return (
       <div className="container">
           <div className="row">
               {
                   users.map(e=> <Emailfilter
                   e={e}
                   users={users}
                   setUsers={setUsers}
                   ></Emailfilter> )
               }
           </div>
       </div>
    );
};

export default Myorder;