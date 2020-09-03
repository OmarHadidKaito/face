import React from 'react';
import { Link } from 'react-router-dom';
import face from './image/face1.png';
import './css/style.css';
export default function Welcome() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 white-text vertical-center">
                        <div className="WMborder">
                            <p className="title text-center">
                                Welcome to our analysis world !!
                        </p>
                            <p className="second-title">
                                Why we are here ?
                        </p>
                            <p className="paragraph">
                                This site was created for joying and demonstration
                                many services for multiple domains.
                        </p>
                            <p className="paragraph">
                                Let us save our words and go dirctly to enter in the
                                actions :-) ...
                        </p>
                            <Link to="/services" className="Mbutton ">GO TO SERVICES</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 white-text vertical-center">
                        <img src={face} className="img-fluid" alt="." />
                    </div>
                </div>
            </div>
        </div>
    )
}
