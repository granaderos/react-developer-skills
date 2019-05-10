import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import SkillAssessment from "./SkillAssessment";
import Developers from "./Developers";
import Skills from "./Skills";
import SkillCapabilityReport from "./SkillCapabilityReport";
import Login from "./Login"
import UserStories from "./UserStories"

class Home extends Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <Route 
                        path="/" 
                        exact component={Dashboard} 
                    />

                    <Route 
                        path="/skill-assessments" 
                        exact component={SkillAssessment} 
                        listDevelopers={this.props.listDevelopers} 
                    />

                    <Route 
                        path="/developers" 
                        exact component={Developers}
                        listDevelopers={this.props.listDevelopers}
                    />

                    <Route 
                        path="/skills" 
                        exact component={Skills} 
                    />

                    <Route 
                        path="/skills-capability-report" 
                        exact component={SkillCapabilityReport} 
                    />

                    <Route 
                        path="/login" 
                        exact component={Login} 
                    />

                    <Route 
                        path="/user-stories" 
                        exact component={UserStories} 
                    />
                     
                </Fragment>
            </Router> 
        )
    }
}

export default Home;