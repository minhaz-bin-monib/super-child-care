import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    
   

    const [serviceDetail, setServiceDetail] = useState([])
    useEffect(() => {
        fetch('https://safe-garden-98864.herokuapp.com/serviceDetail')
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    return (
        <div >
            <h1 style={{textAlign:'center', color:'green', marginTop:'30px'}}>Our Services</h1>
            
                <div style={{marginBottom:'150px'}} className="row">
                {
                    serviceDetail.map(services => <ServiceCard services={services}></ServiceCard>)
                }
                </div>
            

        </div>
    );
};

export default Services;