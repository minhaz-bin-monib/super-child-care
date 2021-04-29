import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Shared/Dashboard/Dashboard';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const newAdminEmail = data;
        console.log(newAdminEmail)
        alert('Admin Email uploaded successfully')

        const url =`https://safe-garden-98864.herokuapp.com/makeAdmin`;
        

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newAdminEmail)
        })

        .then(res => console.log('server side response', res))
    }

    
    return (
        <div>
            <Dashboard></Dashboard>
            <div style={{textAlign:'center'}}>
                <h1>Add your Email: </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                <input size="50" name="adminEmail" placeholder="Admin Email" ref={register} />
                <br />
                
                <input style={{ color: 'green' }} type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;