import React from 'react';
import mainPic from "./header-pic.jpg"

const Header = () => {
    return (
        <section style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">

                <h1 style={{color:'#32CD32'}}>We care <br/> Your Babies</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus beatae corporis odio provident, obcaecati voluptate.</p>
                <button className="btn btn-success">GET PLAN</button>

            </div>

            <div className="col-md-6">
                <img style={{borderRadius:'20px'}} src={mainPic} alt="" className="img-fluid"/>
            </div>
        </section>
    );
};

export default Header;