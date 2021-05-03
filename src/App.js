import React, { Component }  from 'react';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import './App.scss';
import HomeLight from './containers/HomeLight';
import AboutLight from './containers/AboutLight';
import ProjectsLight from './containers/ProjectsLight';
import ContactLight from './containers/ContactLight';
import HomeDark from './containers/HomeDark';
import AboutDark from './containers/AboutDark';
import ProjectsDark from './containers/ProjectsDark';
import ContactDark from './containers/ContactDark';

class App extends Component {
  render() {
    const colorTheme = localStorage.getItem('colorMode');
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <HashRouter>
            <Route exact path='/' >
              {colorTheme === 'dark' ? <HomeDark /> : <HomeLight/>}
            </Route>
            <Route exact path='/about'>
              {colorTheme === 'dark' ? <AboutDark /> : <AboutLight />}
            </Route>
            <Route exact path='/projects' >
              {colorTheme === 'dark' ? <ProjectsDark /> : <ProjectsLight />}
            </Route>
           <Route exact path='/contact' >
              {colorTheme === 'dark' ? <ContactDark /> : <ContactLight />}
            </Route>
          </HashRouter>
        </div>
      </Router>
    );
  }
};

export default App;
