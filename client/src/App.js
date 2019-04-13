import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Header from './components/header/header';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
