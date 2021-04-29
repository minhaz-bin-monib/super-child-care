import React, { useEffect, useState } from 'react';
import AllOrderDetails from '../AllOrderDetails/AllOrderDetails';
import Dashboard from '../Shared/Dashboard/Dashboard';

const AllOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('https://safe-garden-98864.herokuapp.com/allOrder')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <Dashboard></Dashboard>
            
            
            <div style={{ textAlign: 'center'}}>
                <h1 style={{color:'green'}}>Controls Order From here:</h1>

                {
                    orders.map(order=> <AllOrderDetails order={order}></AllOrderDetails>)
                }

            </div>
        
        
        </div>
    );
};

export default AllOrder;