import React from 'react';
import { Card } from 'react-bootstrap';


const ReviewCard = (props) => {
    console.log(props.read)
    const {review} = props.read;
    return (
        <div className="col-md-4">
            
            <div style={{marginLeft:'100px', marginTop:'20px', marginBottom:'5px'}} >
            <Card  style={{ width: '18rem', backgroundColor:'#FFFFFF', display:'flex',boxShadow: '5px 10px 18px #888888'  }}>
                <Card.Body>
                <h5>Customer Review: </h5>
                    <p>{review}</p>

                </Card.Body>
            </Card>

            </div>
            
        </div>
    );
};

export default ReviewCard;