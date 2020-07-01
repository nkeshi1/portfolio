import React, { Component } from 'react';
import '../css/home.css';
import '../js/main';

class Home extends Component {
    render() { 
        return (
            <div className="home-page">
                <a href="https://www.instagram.com/" id="cvBtn">DOWNLOAD C.V. <i className="fa fa-download"/> </a>
                <section>
                    <h1>Hi,</h1>
                    <p className="myname">i'm Nkansah Isaac</p>
                    <p className="specs">Web Developer <span>|</span> Android App Developer.</p>
                </section>
            </div>
        );
    }
}
 
export default Home;