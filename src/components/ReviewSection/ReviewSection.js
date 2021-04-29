import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Shared/Dashboard/Dashboard';

const ReviewSection = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const reviewData = data;
        console.log(reviewData);

        alert('Review save successfully')

        const url =`https://safe-garden-98864.herokuapp.com/reviews`;
        

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewData)
        })

        .then(res => console.log('server side response', res))
    }


    return (
        <div>
            <Dashboard></Dashboard>

            <div style={{textAlign:'center'}}>
                
                <h2>Add your Review: </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                <input size="50" name="review" placeholder="Review" ref={register} />
                <br />
                
                <input style={{ color: 'green' }} type="submit" />
            </form>
            </div>
        </div>
    );
};

export default ReviewSection;