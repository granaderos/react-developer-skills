import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import SkillAssessment from "./SkillAssessment";
import Developers from "./Developers";
import Skills from "./Skills";
import SkillCapabilityReport from "./SkillCapabilityReport";

class Home extends Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/skill-assessments" exact component={SkillAssessment} />
                    <Route path="/developers" exact component={Developers} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/skills-capability-report" exact component={SkillCapabilityReport} /> 
                </Fragment>
            </Router> 
        )
    }
}

export default Home;