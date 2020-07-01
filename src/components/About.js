import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-page">
                <h1>Who is <span>Nkansah Isaac</span></h1>
                <main>
                    <section className="description">
                        <h3>Description</h3><hr/>
                        <p>The waterfall model is a model that very straightforward and not complicated in its usage. 
                        It was the first model to be introduced. In waterfall model, each phase must be finished and finalize 
                        before the next phase can proceed and there is no way a phase was overlapping the other. 
                        <br/>By using the waterfall approach, the whole software development process should be broken down 
                        into separate phases. 
                        The output of one phase becomes the input for the next phase in an orderly manner.</p>
                        <a href="https://www.google.com/" id="cvBtn">Download C.V <i className="fa fa-download"/></a>
                    </section>
                    <section id="photo">
                        <img src={require('../imgs/myphoto.jpg')} alt="img" />
                    </section>
                </main>
            </div>
        );
    }
}

export default About;