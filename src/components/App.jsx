import React, { Component } from 'react';
import '../css/App.css';
import Home from "./Home";

import $ from 'jquery';
import Axios from 'axios';
window.$ = window.jQuery = $;

const baseAPIURL = "http://localhost:8080/api-developers/rest";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listDevelopers: [],
      listSkills: [],
      listSkillCapabilityReport: [],
      developer: {},
      skill: {},
      skillAssessment: {}
    }
  }

  componentDidMount() {
    this.getListDevelopers();
  }

  // axios API requests
  getListDevelopers = () => {
    console.log("CALLED getListDevelopers");
    Axios.get(baseAPIURL+"/developers")
      .then(res => {
        this.setState({
          listDevelopers: res.data
        })
        console.log("REST = " + JSON.stringify(res));
      })
  }

  render() {
    return (
      <Home
        listDevelopers={this.state.listDevelopers}
      />
    )
  }
}

export default App;
