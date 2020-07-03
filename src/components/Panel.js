import React, {useEffect} from 'react';
import '../css/panel.css';

const Panel = () => {
    useEffect(() => {
        console.log('effect');
    });
    return ( 
        <div className="panel">
            <div className="logo"></div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav> 
            <section className="social-icons">
                <a title="Facebook" href="https://www.facebook.com/myaccount" className="fa fa-facebook">{}</a>
                <a title="Twitter" href="https://www.twitter.com/myaccount" className="fa fa-twitter">{}</a>
                <a title="GitHub" href="https://www.github.com/myaccount" className="fa fa-github">{}</a>
                <a title="LinkedIn" href="https://www.github.com/myaccount" className="fa fa-linkedin">{}</a>
            </section>
        </div>
    );
}
 
export default Panel;