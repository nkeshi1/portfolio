import React, {Component} from 'react';
import './css/App.css';
import Panel from './components/Panel';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  state = { 
    currentPage: 'Home'
  }
  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  }
  render() { 
    let page = <Home/>;
    let selectedPage = this.state.currentPage;
    if (selectedPage === 'Home'){
      page = <Home/>;
    }else if(selectedPage === 'About'){
      page = <About/>;
    }else if(selectedPage === 'Services'){
      page = <Services/>;
    }else if (selectedPage === 'Projects') {
      page = <Projects/>;
    }else if(selectedPage === 'Contact'){
      page = <Contact/>;
    }
    return (
      <div className="App">
        <Panel page={this.handlePageChange}/>
        {page}
      </div>
    );
  }
}

export default App;
