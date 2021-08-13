import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props){
    return (
        <footer className="siteFooter">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-3 ">
                        <h5 className="fonts">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm-3 col-6 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fonts" /> 1-800-800-8000</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o fonts" /> email@company.com</a>
                    </div>

                    <div className="col-12 col-sm-6 text-center mt-1">
                        <h3 className="fonts">Connect with us</h3>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-5x fonts" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook fa-5x fonts" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-5x fonts" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-5x fonts" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;