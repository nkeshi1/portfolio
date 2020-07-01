import React, { Component } from 'react';

class Services extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="services-page">
            <h1>Services We Offer</h1>
            <section className="skillset">
                    <h3>Skills Set</h3><hr/>
                    <table border="1" cellSpacing="8" cellPadding="8">
                        <thead>
                            <tr>
                                <th>Languages / technologies</th>
                                <th>Proficiency Level</th>
                                <th>Framewords / Libraries</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML</td>
                                <td>Intermediate</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>Intermediate</td>
                                <td>Bootstrap</td>
                            </tr>
                            <tr>
                                <td>PHP</td>
                                <td>Intermediate</td>
                                <td>laravel</td>
                            </tr>
                            <tr>
                                <td>MySQL</td>
                                <td>Beginner</td>
                            </tr>
                            <tr>
                                <td>Javascript</td>
                                <td>Intermediate</td>
                                <td>React js, jQuery</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Intermediate</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}
 
export default Services;