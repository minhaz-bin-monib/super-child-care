import React, { useEffect, useState } from 'react';
import DeleteService from '../DeleteService/DeleteService';
import Dashboard from '../Shared/Dashboard/Dashboard';

const ManageProduct = () => {

    const[serviceDetail, setServiceDetail] = useState([])
    useEffect(()=>{
        fetch('https://safe-garden-98864.herokuapp.com/serviceDetail')
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    },[])
    console.log(serviceDetail)

    return (
        <div>
            <Dashboard></Dashboard>

            <div style={{textAlign:'center'}}>
                <h1>this is manage products</h1>
                {
                    serviceDetail.map(service => <DeleteService service = {service}></DeleteService>)
                }
            </div>

        </div>
    );
};

export default ManageProduct;