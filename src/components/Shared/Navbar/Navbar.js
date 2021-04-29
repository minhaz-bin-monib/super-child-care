import React, { useContext } from 'react';
import navPicture from './super child.png' 
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div style={{backgroundColor:'lightgreen'}} className="navbar-style ">
            <img className='col-md-7' style={{width:'200px',marginLeft:'80px'}} src={navPicture} alt="" />
            <nav class="navbar navbar-expand-lg navbar-light  col-md-5 ms-auto">
                <div class="container-fluid">
                <Link style={{textDecoration:'none'}} to="/home"><a style={{marginLeft:'50px'}} class="navbar-brand" href="#">Home</a></Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto  mb-2 mb-lg-0" style={{marginLeft:'30px'}}>
                            <li class="nav-item">
                                <Link style={{textDecoration:'none'}} to="/dashboard"><a class="nav-link active" aria-current="page" href="#">Dashboard</a></Link>
                                
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">link </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">disabled</a>
                            </li> */}

                            
                            <li>
                            <button style={{marginLeft:'5px', textDecoration:'none'}} class="btn btn-success" type="submit"> <Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link> </button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>




        </div>
    );
};

export default Navbar;