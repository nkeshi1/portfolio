import React, { Component } from 'react';
import '../css/tabs.css';

class Tabs extends Component {
    changeTabs = (e) => {
        let clickedBtn = e.target;
        // alert(clickedBtn.value);
        let allBtns = document.querySelectorAll('.tabs-layout > button');
        allBtns.forEach((btn)=>{
            btn.className = "";
        });
        clickedBtn.className = "active";
        this.props.active(clickedBtn.value);
    }
    render() { 
        return ( 
            <div className="tabs-layout">
                <button value="all" onClick={this.changeTabs} className="active">All Projects (10)</button>
                <button value="web" onClick={this.changeTabs}>Web Projects (4)</button>
                <button value="android" onClick={this.changeTabs}>Android Projects (6)</button>
            </div>
        );
    }
}
 
export default Tabs;