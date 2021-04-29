import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6 style={{color:'green'}}>About</h6>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor et aspernatur velit reiciendis assumenda corrupti exercitationem ab vero qui illo error facere quia, nostrum culpa ratione molestiae. Ducimus error illo a, qui placeat dolores quia alias ab porro perferendis omnis vitae animi nisi sit dolor sed, tenetur unde nam?</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6 style={{color:'green'}}>Categories</h6>
                            <ul class="footer-links">
                                <li>Day Care</li>
                                <li>Night Care</li>
                                <li>Full day Care</li>
                                <li>Weekly Package</li>
                                <li>Monthly Package</li>
                                <li>Yearly Package</li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6 style={{color:'green'}}>Quick Links</h6>
                            <ul class="footer-links">
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Contribute</li>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>
                 </div>   
      
      
            </footer>
                </div>
    );
};

export default Footer;