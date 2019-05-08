import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Developers extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div class="container container-fluid">
                    <form id="formDeveloper">
                        <div>
                            <label for="firstName">First Name:</label>
                            <input type="text" class="form-control" name="firstName" id="firstName" required />
                        </div>
                        <div>
                            <label for="middleName">Middle Name:</label>
                            <input type="text" class="form-control" name="middleName" id="middleName" />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" class="form-control" name="lastName" id="lastName" />
                        </div>
                        <div>
                            <label>Birth Date:</label>
                            <input type="text" class="form-control" name="birthDate" id="birthDate" />
                        </div>
                        <div>
                            <label>Position:</label>
                            <input type="text" class="form-control" name="position" id="position" />
                        </div>
                        <br/>
                        <button class="btn btn-primary">Add</button>
                        <input type="reset" class="btn btn-warning" value="Reset Form" />
                    </form>

                    {/* Dev table and search form */}
                    <form method="GET" id="formSearchDev">
                        <fieldset>
                            <legend>Search Parameters:</legend>
                            <label>First Name:</label> <input type="text" class="form-control" name="sFirstName" id="sFirstName" />
                            <label>Last Name:</label> <input type="text" class="form-control" name="sLastName" id="sLastName" />
                            <label>Skill:</label> <input type="text" class="form-control" name="sSkill" id="sSkill" />
                            <label>Skill Level:</label> <input type="text" class="form-control" name="sSkillLevel" id="sSkillLevel" />
                            <label>Months of Experience:</label> <input type="text" class="form-control" name="sMonthsOfExperience" id="sMonthsOfExperience" />
                        </fieldset>
                        <br />
                        <input type="submit" class="btn btn-primary" value="Search" />&nbsp;&nbsp;
                        <input type="reset" class="btn btn-warning" value="Reset Form" />&nbsp;&nbsp;
                        <button class="btn btn-danger">Cancel</button>

                    </form>

                    <table id="tableDevs" class="table table-hover">
                        <thead>
                            <tr>
                                <th valign="middle" rowspan="2">Developer ID</th>
                                <th valign="middle" valign="center"rowspan="2">Name</th>
                                <th valign="middle" rowspan="2">Birth Date</th>
                                <th valign="middle" rowspan="2">Position</th>
                                <th valign="middle" colspan="3">Skill/s</th>
                            </tr>
                            <tr>
                                <th valign="middle">Skill</th>
                                <th valign="middle">Level</th>
                                <th valign="middle">Months of Experience</th>
                                <th valign="middle"></th>
                            </tr>

                        </thead>
                        <tbody id="tbodyDevelopers"></tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>
        );
    }
}