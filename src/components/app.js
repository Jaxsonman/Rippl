
import React, { Component } from 'react';
import Header from './header';
import HomeAbout from './homeAbout';
import HomeProjects from './homeProjects';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <HomeAbout />
        <HomeProjects />
        <Footer />
      </div>
    );
  }
}
