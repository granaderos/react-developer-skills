import React, { Component, Fragment } from "react";
import Footer from "./Footer";
export default class UserStories extends Component {
    render() {
        return(
            <Fragment>
                <div id="divUserStoriesContainer">
                    <h3>Developer Skills System</h3>
                    <ol>
                        <li>View Home Page</li>
                        <li>Add Skill</li>
                        <li>Add Developer</li>
                        <li>Add Skill Assessment</li>
                        <li>Search Developers (by skill, skill level, first name, last name, months of experience;  AND search for all search parameters)</li>
                        <li>Update Skill Assessment</li>
                        <li>Generate Skill Capability Report</li>
                    </ol>
                    <a target="_blank" href="https://docs.google.com/document/d/1ayyonpnZRFR_ni-XQX3plPV6snpZaDBCBz839qdzRsY/edit#">
                        Link to Case Study - User Stories
                    </a>
                    <hr />
                    <a class="btn btn-primary btn-lg" href="/login">Demo</a>
                </div>
                <Footer />
            </Fragment>
        )
    }
}