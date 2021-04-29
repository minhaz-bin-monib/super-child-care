import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';
import Dashboard from '../Shared/Dashboard/Dashboard';

const Checkout = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const { id } = useParams();
    console.log(id)

    const [serviceDetail, setServiceDetail] = useState([])
    useEffect(() => {
        fetch('https://safe-garden-98864.herokuapp.com/serviceDetail')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])
    console.log(serviceDetail)




    const onSubmit = data => {
        alert('Your Product Added Successfully')

        const eventData = {
            serviceName: data.serviceName,
            userEmail: loggedInUser.email,
            serviceTime: data.serviceTime
        }
        const url = `https://safe-garden-98864.herokuapp.com/addOrders`;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })

            .then(res => console.log('server side response', res))
    }

    return (
        <div >
            <Dashboard></Dashboard>
            <div style={{display:'flex'}} >
                <div style={{  width: '520px', marginLeft: '250px', marginTop: '10px', borderRadius: '4px', paddingLeft: '5px', paddingBottom: '2px' }}>
                    <h3>Service details: </h3>
                    {
                        serviceDetail.map(service => id == service._id &&
                            <form onSubmit={handleSubmit(onSubmit)} action="">
                                <input style={{ border: 'none', width: '500px' }} name="serviceName" placeholder="Service Name" defaultValue={'Service Name: ' + service.serviceName} ref={register} />
                                <br />
                                <input style={{ border: 'none' }} name="serviceTime" placeholder="Service Time" defaultValue={'Service Time: ' + service.serviceTime} ref={register} />

                                <br />
                                <div >
                                    <h6 style={{ marginTop: '50px' }}>Confirm Checkout: </h6><input style={{ backgroundColor: 'green', borderRadius: '5px', color: 'white' }} type="submit" />
                                </div>


                            </form>

                        )
                    }
                </div>
                <div>
                    <h3 style={{ textAlign: 'right' }}>Add Your Card Number:</h3>
                    <div style={{ textAlign: 'right' }} >
                        <Payment></Payment>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Checkout;