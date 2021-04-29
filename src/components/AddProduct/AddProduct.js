import React, { useState } from 'react';
import Dashboard from '../Shared/Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    


    const onSubmit = data => {
        alert('Your Service Added Successfully. Please Go to Home.')
        const eventData = {
            serviceName: data.serviceName,
            serviceTime: data.serviceTime,
            imageURL: imageURL
        }
        const url =`https://safe-garden-98864.herokuapp.com/addServices`;
        

        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })

        .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'af4f9ea290484763ba729d92c02b9e6e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Dashboard></Dashboard>
            <h1 style={{ color: 'yellowgreen' }}>Add your Service here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="serviceName" placeholder="Service Name" ref={register} />
                <br />
                <input name="serviceTime" placeholder="Service Time" defaultValue="" ref={register} />
                <br />
                <input style={{ marginLeft: '200px' }} name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input style={{ color: 'green' }} type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;