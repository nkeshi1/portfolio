import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {
    render() { 
        return ( 
            <div className="contact-page">
                <h1>Get In Touch</h1>
                <p>Want to hire me or probably have a project you want us to work on, contact me.</p>
                <form>
                    <div className="first">
                        <div>
                            <label for="name">Name:</label>
                            <input autoFocus type="text" required placeholder="Name: "/>
                        </div>
                        <div>
                            <label for="mail">Email: </label>
                            <input type="email" required placeholder="Email: "/>
                        </div>
                    </div>
                    <div className="second">
                        <label for="name">What is it About: </label>
                        <input type="text" required placeholder="Subject: " list="subject"/>
                        <datalist id="subject">
                            <option value="A Hire"></option>
                            <option value="A collaboration"></option>
                        </datalist>
                    </div>
                    <div className="third">
                        <label>Message</label>
                        <textarea rows="10" placeholder="Message:"/>
                    </div>
                    <button className="fourth">SEND MAIL</button>
                </form>
            </div>
        );
    }
}
 
export default Contact;