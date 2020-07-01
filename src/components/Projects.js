import React, { Component } from 'react';
import Tabs from './Tabs';
import '../css/projects.css';
import AllProjects from './AllProjects';
import WebProjects from './WebProjects';
import AndroidProjects from './AndroidProjects';

class Projects extends Component {
    state = { 
        activeTab: 'All Projects',
    } 
    handleTabsChange = (tabs) => {
        this.setState({
            activeTab: tabs
        });
    }
    render() { 
        let frame;
        let activeTab = this.state.activeTab;
        if (activeTab === 'all'){
            frame = <AllProjects/>;
        }else if (activeTab === 'web'){
            frame = <WebProjects/>;
        }else if (activeTab === 'android') {
            frame = <AndroidProjects/>;
        }else {
            frame = <AllProjects/>;
        }
        return ( 
            <div className="projects-page">
                <h1>My Projects</h1>
                <Tabs active={this.handleTabsChange}/>
                {frame}
            </div>
        );
    }
}
 
export default Projects;