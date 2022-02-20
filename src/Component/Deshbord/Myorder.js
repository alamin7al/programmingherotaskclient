import React, { useEffect, useState } from 'react';

import useAuth from '../Login/useAuth';
import Emailfilter from './Emailfilter';

const Myorder = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://tranquil-spire-06424.herokuapp.com/singleemail?email=${user?.email}`)
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