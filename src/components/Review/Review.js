import React, { useEffect, useState } from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';


const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('https://safe-garden-98864.herokuapp.com/getReview')
        .then(res=> res.json())
        .then(data => setReview(data))
    },[])
    console.log(review)
    return (
        <div style={{marginBottom:'30px'}} className="row">
            <h2 style={{textAlign:'center', color:'green'}}>Some Reviews Given By Customer</h2>
            
                    <div className="row">
                    
                    {
                        review.map(read =>  <ReviewCard read={read}></ReviewCard>)
                    }
                    
                    </div>
                   
    
                
                
            
           
        </div>
    );
};

export default Review;