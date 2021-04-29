import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Dashboard from '../Shared/Dashboard/Dashboard';

const OrderedServices = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    

    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://safe-garden-98864.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders)

    return (
        <div>
            <Dashboard></Dashboard>
            <div style={{textAlign:'center'}}>
            <h1 style={{color:'green',marginTop:'5px'}}>All Ordered Services: </h1>
            {
                orders.map(order => <p><h4 style={{color:'yellowgreen',marginBottom:'3px'}}>{order.serviceName}</h4> {order.serviceTime} <br/> Customer Email: {order.userEmail} <br/> <strong>Current Status: </strong>  <span style={{backgroundColor:'yellow',color:'red'}}>{order.status ? order.status.status : 'Pending'}</span> </p>  )
            }
            
            </div>
        </div>
    );
};

export default OrderedServices;