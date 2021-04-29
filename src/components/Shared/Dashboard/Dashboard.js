import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import AddProduct from '../../AddProduct/AddProduct';
import "./Dashboard.css"

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState([])
    // const [admin, setAdmin] = useState({})


    useEffect(() => {
        fetch('https://safe-garden-98864.herokuapp.com/getAdmin')
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    
    // const set = [...isAdmin]
    // const p = set.find(t=> setAdmin(t))
    // console.log(set)
    // console.log(loggedInUser.email)
    // console.log(admin)


    return (

        <div>

            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/home"> <span>Home</span> </Link>
                    </li>
                    <li>
                        <Link to="/dashboard"> <span>Dashboard</span> </Link>
                    </li>




                    {
                        isAdmin.map(admin => (admin.adminEmail == loggedInUser.email)
                            ? <div>
                                <li>
                                    <Link to="/makeAdmin/dashboard"> <span>Make Admin</span> </Link>
                                </li>
                                <li>
                                    <Link to="/allOrder/dashboard"> <span>Orders Status Control</span> </Link>
                                </li>
                                <li>
                                    <Link to="/addProduct/dashboard"> <span>Add Product</span> </Link>
                                </li>
                                <li>
                                    <Link to="/manageProduct/dashboard"> <span>Manage Product</span> </Link>
                                </li>
                            </div>
                            :
                            <div>
                                <li>
                                    <Link to="/orderedServices/dashboard"> <span>Ordered Services</span> </Link>
                                </li>
                                <li>
                                    <Link to="/reviewSection/dashboard"> <span>Add Reviews</span> </Link>
                                </li>

                            </div>

                             
                             )

                    }
                    
                    
                    
                    
                    
                    





                    {/* <li>
                        <Link to="/orderedServices/dashboard"> <span>Ordered Services</span> </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/allOrder/dashboard"> <span>All Orders</span> </Link>
                    </li> */}

                    {/* <li>
                        <Link to="/makeAdmin/dashboard"> <span>Make Admin</span> </Link>
                    </li> */}
                </ul>


            </div>
            <div style={{ textAlign: 'center' }}>

            </div>


        </div>
    );
};

export default Dashboard;