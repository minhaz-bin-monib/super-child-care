import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteService = (props) => {
    console.log(props.service)
    const {serviceName,serviceTime,_id} = props.service
    const deleteProduct = id =>{
        console.log(id)
        fetch(`https://safe-garden-98864.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
        alert('Deleted complete. Check it from home')
    }

    
    return (
        <div style={{marginLeft:'500px'}}>
            <div  style={{marginTop:'20px', border:'2px solid green', width:'400px', paddingBottom:'2px',paddingLeft:'2px', borderRadius:'3px'}}>
            <h3 >{serviceName}</h3>
            <p><strong> Service Time: {serviceTime}</strong></p>
            <Button variant="danger" onClick={()=>deleteProduct(_id)}>Delete</Button>
            
            <br/>
            </div>
            
        </div>
    );
};

export default DeleteService;