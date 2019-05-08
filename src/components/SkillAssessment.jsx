import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class SkillAssessment extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                    <div className="container container-fluid">
                    <form id="formSkillAssessment">
                        <label>Developer:</label>
                        <select className="form-control" name="saDeveloper" id="saDeveloper"></select>
                        <label>Skill:</label>
                        <select className="form-control" name="saSkill" id="saSkill"></select>
                        <label>Skill Level:</label>
                        <select className="form-control" name="saSkillLevel" id="saSkillLevel"></select>
                        <label>Months of Experience:</label>
                        <input className="form-control" type="number" name="saMonthsOfExperience" id="saMonthsOfExperience" />
                        <br/>                    
                        <button id="btnSubmitSkillAssessment" className="btn btn-primary">Add</button>
                        <button id="btnCancelUpdate" className="btn btn-danger">Cancel</button>
                    </form>

                    <table id="tableDevs" className="table table-hover">
                        <thead>
                            <tr>
                                <th rowspan="2">Developer ID</th>
                                <th valign="center"rowspan="2">Name</th>
                                <th rowspan="2">Birth Date</th>
                                <th rowspan="2">Position</th>
                                <th colspan="3">Skill/s</th>
                            </tr>
                            <tr>
                                <th >Skill</th>
                                <th >Level</th>
                                <th >Months of Experience</th>
                                <th ></th>
                            </tr>

                        </thead>
                        <tbody id="tbodyDevelopers"></tbody>
                    </table>
                </div>
                <Footer />    
            </Fragment>
            
        )
    }
}