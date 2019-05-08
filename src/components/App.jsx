import React, { Component, Fragment } from 'react';
import '../css/App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          
        <Footer />
      </Fragment>
    );
  }
}

export default App;
