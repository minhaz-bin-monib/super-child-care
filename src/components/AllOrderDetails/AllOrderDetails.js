import React from 'react';

const AllOrderDetails = (props) => {
    console.log(props.order)
    const {userEmail,_id,serviceName,serviceTime} = props.order;
    // const id = _id;
    // console.log(id);
    const handleStatus = (e) =>{
        alert('Your Status Updated Successfully.')
        
        console.log(e.target.value)
        

        const eventData = {status:e.target.value}

        const url =`https://safe-garden-98864.herokuapp.com/allOrder/${_id}`;

        fetch(url,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })

        .then(res => res.json())
        .then(data=>console.log(data))
        

        
    };



    return (
        <div style={{backgroundColor:'lightgray'}}>
            
                <h5>User Email: {userEmail}</h5>
                <p>{serviceName}</p>
                <p>{serviceTime}</p>
                
                
            
            <div style={{marginBottom:'40px'  }}>
                <p><strong>Select status: </strong></p>
            <button  value="Pending"  onClick={handleStatus}>Pending</button>
            <br/>
            <button  value="On Going"  onClick={handleStatus}>On Going</button>
            <br/>
            <button  value="Done"  onClick={handleStatus}>Done</button>
            </div>
            
        </div>
    );
};

export default AllOrderDetails;