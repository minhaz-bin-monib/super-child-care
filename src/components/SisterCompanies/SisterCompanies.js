import React from 'react';
import img1 from './amazon.png'
import img2 from './pran.jpg'
import img3 from './RFL.jpg'
import { Button, Card } from 'react-bootstrap';

const SisterCompanies = () => {
    return (
        <div style={{marginTop:'100px', marginBottom:'100px'}}  > 
            <h2 style={{textAlign:'center', color:'green'}}>Sister Concern:</h2>

          
          <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'row'}} >
           <div  style={{ marginLeft: '100px', marginTop: '20px', marginBottom: '5px' }} >
                <Card  style={{ width: '18rem', backgroundColor: '#FFFFFF', display: 'flex', boxShadow: '5px 10px 18px #888888' }}>
                    <Card.Body>
                        <img style={{ width: '200px' , height:'250px', marginLeft:'21px' }} src={img1} alt=""/>
                        <h5 style={{textAlign:'center'}}> <a target="_blank" href="https://www.amazon.com/">Amazon.com</a> </h5>
                        
                    </Card.Body>
                </Card>

                

            </div>
          </div>

           
        </div>
    );
};

export default SisterCompanies;