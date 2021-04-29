import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./ServiceCard.css"

const ServiceCard = (props) => {
    const history = useHistory();

    console.log(props.services)
    const{imageURL,serviceName,serviceTime, _id} = props.services;

    const handleUser = () => {
        
        const url = `checkout/${_id}`
        history.push(url);
    }
    console.log(_id)
    return (
        <div  className="col-md-4">
            <div style={{marginLeft:'100px', marginTop:'20px', marginBottom:'5px'}} className="col-md-4">
            <Card  style={{ width: '18rem', backgroundColor:'#FFFFFF', display:'flex',boxShadow: '5px 10px 18px #888888'  }}>
                <Card.Body>
                <img  className="image-style" src={imageURL} alt="" />
                    <Card.Title style={{textAlign:'center'}}> <strong>{serviceName}</strong> </Card.Title>
                    <Card.Text style={{marginLeft:'8px'}}>
                        <p style={{textAlign:'center'}}> <strong >Service Time: {serviceTime}</strong> </p>
                    </Card.Text>
                    <Button onClick={handleUser} style={{marginLeft:'80px'}} variant="success">Buy now</Button>
                </Card.Body>
            </Card>
            </div>
            
        </div>
    );
};

export default ServiceCard;