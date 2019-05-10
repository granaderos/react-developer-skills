import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
import $ from "jquery"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)
library.add(faEdit)

window.$ = window.jQuery = $;

const baseAPIURL = "http://localhost:8080/api-developers/rest";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
export default class SkillAssessment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listDevelopers: [],
            listSkills: [],
            listLevels: [],
            skillAssessment: {
                developer: {
                    developerId: null,
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    birthDate: null,
                    position: ""
                },
                skill: {
                    skillId: null,
                    skill: ""
                },
                skillLevel: "",
                monthsOfExperience: null
            },
            action: "",
        }
    }

    componentDidMount() {
        this.getListDevelopers();
        this.getListSkills();
        this.getListLevels();

        $("#btnCancelUpdate").hide();
        $("#formSearchDev").hide();
        $("#divAddSkillAssessment").hide();

    }

    // axios API requests
    getListDevelopers = () => {
        $("#formSearchDev").trigger("reset");
        Axios.get(baseAPIURL + "/developers")
            .then(res => {
                this.setState({
                    listDevelopers: res.data
                })
            })
    }

    getListSkills = () => {
        Axios.get(baseAPIURL + "/skills")
            .then(res => {
                this.setState({
                    listSkills: res.data
                })
            })
    }

    getListLevels = () => {
        Axios.get(baseAPIURL + "/skills/levels")
            .then(res => {
                this.setState({
                    listLevels: res.data
                })
            })
    }

    handleChangeSkillAssessmentData = (e) => {
        const { name, value } = e.target;

        if(name == "skillId") {
            this.setState((prevState) => ({
                skillAssessment: {
                    ...prevState.skillAssessment,
                    skill: {
                        skillId: value
                    }
                }
            }));
        } else if(name == "developerId") {
            this.setState((prevState) => ({
                skillAssessment: {
                    ...prevState.skillAssessment,
                    developer: {
                        developerId: value
                    }
                }
            }));
        } else {
            this.setState((prevState) => ({
                skillAssessment: {
                    ...prevState.skillAssessment,
                    [name]: value
                }
            }));
        }
    }

    handleAddSkillAssessmentFormSubmit = (e) => {
        e.preventDefault();

        var skillAssessmentData = this.state.skillAssessment;

        if(this.state.action == "update") {

            Axios.put(baseAPIURL + "/skillAssessments/update", skillAssessmentData, config)
            .then(res => {
                alert(res.data);

                this.getListDevelopers();
                this.handleClickCancelUpdate();
            })
        } else {
            // add

            Axios.post(baseAPIURL + "/skillAssessments/add", skillAssessmentData, config)
            .then(res => {
                alert(res.data);

                if(res.data == "New skill assessment has been successfuly added.") {
                    this.getListDevelopers();
                    // reset form
                    $("#formSkillAssessment").trigger("reset");
                }
            })
        }
    }

    handleClickUpdateAssessment = (developerId, skillId, skillLevel, monthsOfExperience) => {
        console.log("To update: ")
        console.log(developerId + " " + skillId + " " + skillLevel + " " + monthsOfExperience);

        this.setState((prevState) => ({
                skillAssessment: {
                    ...prevState.skillAssessment,
                    skill: {
                        ...prevState.skillAssessment.skill,
                        skillId: skillId
                    },
                    developer: {
                        ...prevState.skillAssessment.developer,
                        developerId: developerId
                    },
                    skillLevel: skillLevel,
                    monthsOfExperience: monthsOfExperience
                }
            }));

        $("#developerId").val(developerId);
        $("#developerId").prop("disabled", "disabled");

        $("#skillId").val(skillId);
        $("#skillId").prop("disabled", "disabled");

        $("#skillLevel").val(skillLevel);
        $("#monthsOfExperience").val(monthsOfExperience);

        this.setState({action: "update"});
        $("#btnShowAddSkillAssessmentForm").click();
        window.location.href = "#divAddSkillAssessment";
        $("#developerId").focus();
        $("#h3SkillAssessment").html("Update Skill Assessment");
        $("#btnSubmitSkillAssessment").html("Save");
        $("#btnCancelUpdate").show();
    }

    handleClickCancelUpdate = () => {
        $("#developerId").prop("disabled", false);
        $("#skillId").prop("disabled", false);

        $("#formSkillAssessment").trigger("reset");
        $("#btnCancelUpdate").hide();
        $("#h3SkillAssessment").html("Add a Skill Assessment");
        $("#btnSubmitSkillAssessment").html("Add");
        this.setState({action: ""});
    }

    handleFilterDevFormSubmit = (e) => {
        e.preventDefault();

        var skill = $("#sSkill").val();
        var skillLevel = $("#sSkillLevel").val();
        var monthsOfExperience = $("#sMonthsOfExperience").val();
        var firstName = $("#sFirstName").val();
        var lastName = $("#sLastName").val();

        var queryParam = "";
        if(skill.trim().length > 0) queryParam += "skill="+skill;
        if(skillLevel.trim().length > 0) {
            if(queryParam != "") queryParam += "&";
            queryParam += "skillLevel="+skillLevel;
        }

        if(monthsOfExperience.trim().length > 0) {
            if(queryParam != "") queryParam += "&";
            queryParam += "monthsOfExperience="+monthsOfExperience;
        } 
        if(firstName.trim().length > 0) {
            if(queryParam != "") queryParam += "&";
            queryParam += "firstName="+firstName;
        }
        if(lastName.trim().length > 0) {
            if(queryParam != "") queryParam += "&";
            queryParam += "lastName="+lastName;
        }

        if(queryParam != "") {
            Axios.get(baseAPIURL + "/developers/search?"+queryParam)
                .then(res => {
                    this.setState({
                        listDevelopers: res.data
                    })
                });
        } else {
            this.getListDevelopers();
        }
    }

    handleShowFilterDevelopers = () => {
        if($("#btnShowFilterDevelopers").html() == "Hide Filter Options") {
            $("#btnShowFilterDevelopers").html("Filter Developer List");
            $("#formSearchDev").hide("slow");
        } else {
            $("#btnShowFilterDevelopers").html("Hide Filter Options");
            $("#formSearchDev").show("slow");
        }
        
    }

    handleShowAddSkillAssessment = () => {
        if($("#btnShowAddSkillAssessmentForm").html() == "Add a Skill Assessment") {

            $("#divAddSkillAssessment").show();
            $("#btnShowAddSkillAssessmentForm").html("Hide Skill Assessment Form");

        } else {
            $("#btnShowAddSkillAssessmentForm").html("Add a Skill Assessment");
            $("#divAddSkillAssessment").hide();
        }
    }

    render() {
        return (
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                    <br />
                    <div className="float-right">
                        <button className="btn btn-info" id="btnShowFilterDevelopers" onClick={this.handleShowFilterDevelopers}>Filter Developer List</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-primary" id="btnShowAddSkillAssessmentForm" onClick={this.handleShowAddSkillAssessment}>Add a Skill Assessment</button>
                    </div>
                    <br />
                    <div id="divAddSkillAssessment">
                        <h3 id="h3SkillAssessment">Add a Skill Assessment</h3>
                        <form id="formSkillAssessment" method="POST" onSubmit={this.handleAddSkillAssessmentFormSubmit}>
                            <label>Developer:</label>
                            <select onChange={this.handleChangeSkillAssessmentData} className="form-control" name="developerId" id="developerId">
                                <option value></option>
                                {
                                    this.state.listDevelopers.map(dev => {
                                        return (
                                            <option key={dev.developer.developerId} value={dev.developer.developerId}>{dev.developer.firstName} {dev.developer.middleName}  {dev.developer.lastName} </option>
                                        )
                                    })
                                }
                            </select>
                            <label>Skill:</label>
                            <select onChange={this.handleChangeSkillAssessmentData} className="form-control" name="skillId" id="skillId">
                                <option value></option>
                                {
                                    this.state.listSkills.map(skill => {
                                        return (
                                            <option key={skill.skill} value={skill.skillId}>{skill.skill}</option>
                                        )
                                    })
                                }
                            </select>
                            <label>Skill Level:</label>
                            <select onChange={this.handleChangeSkillAssessmentData} className="form-control" name="skillLevel" id="skillLevel">
                                <option value></option>
                                {
                                    this.state.listLevels.map(level => {
                                        return (
                                            <option key={level} value={level}>{level}</option>
                                        )
                                    })
                                }
                            </select>
                            <label>Months of Experience:</label>
                            <input onChange={this.handleChangeSkillAssessmentData} className="form-control" type="number" name="monthsOfExperience" id="monthsOfExperience" />
                            <br />
                            <button type="submit" id="btnSubmitSkillAssessment" className="btn btn-primary">Add</button>
                            &nbsp;&nbsp;
                            <input type="button" id="btnCancelUpdate" onClick={this.handleClickCancelUpdate} className="btn btn-danger" value="Cancel" />
                        
                        </form> 
                    </div>

                    <div id="divFilterSkillAssessmentContainer">
                        <form method="GET" id="formSearchDev" onSubmit={this.handleFilterDevFormSubmit}>
                            <fieldset>
                                <legend>Filter Options:</legend>
                                <small>First Name:</small> <input type="text" className="form-control-sm form-control" name="sFirstName" id="sFirstName" />
                                <small>Last Name:</small> <input type="text" className="form-control-sm form-control" name="sLastName" id="sLastName" />
                                <small>Skill:</small> <input type="text" className="form-control-sm form-control" name="sSkill" id="sSkill" />
                                <small>Skill Level:</small> <input type="text" className="form-control-sm form-control" name="sSkillLevel" id="sSkillLevel" />
                                <small>Months of Experience:</small> <input type="text" className="form-control-sm form-control" name="sMonthsOfExperience" id="sMonthsOfExperience" />
                            </fieldset>
                            <br />
                            <input type="submit" className="btn btn-sm btn-primary" value="Search Filter" />&nbsp;&nbsp;
                            <input type="reset" className="btn btn-sm btn-warning" value="Reset Form" />&nbsp;&nbsp;
                            <input type="button" onClick={this.getListDevelopers} className="btn btn-sm btn-danger" value="Clear Filter" />

                        </form>
                    </div>
                    
                    <br />
                    <h3>Skill Assessments</h3>
                    <table id="tableDevs" className="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Developer ID</th>
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Position</th>
                                <th>Skill/s</th>
                            </tr>

                        </thead>
                        <tbody id="tbodyDevelopers">
                            {
                                this.state.listDevelopers.length > 0 ?
                                    this.state.listDevelopers.map((dev, index) => {
                                        var rowSpan = dev.skills.length;
                                        return (
                                            <tr rowSpan={rowSpan} key={dev.developer.developerId}>
                                                <td>{index + 1}</td>
                                                <td>{dev.developer.developerId}</td>
                                                <td>{dev.developer.firstName} {dev.developer.middleName} {dev.developer.lastName}</td>
                                                <td>{dev.developer.birthDate}</td>
                                                <td>{dev.developer.position}</td>
                                                <td>
                                                        {
                                                            dev.skills.length > 0 ?
                                                                dev.skills.map(skill => {
                                                                    return(
                                                                        <Fragment key={skill.skillId}>
                                                                            <p>
                                                                                <sup><i className="text-warning" title="Click update skill assessment info" onClick={() => this.handleClickUpdateAssessment(dev.developer.developerId, skill.skillId, skill.skillLevel, skill.monthsOfExperience)}>
                                                                                    <FontAwesomeIcon icon="edit" />
                                                                                </i></sup>
                                                                                <b>{skill.skill}</b>&nbsp;|
                                                                                &nbsp;{skill.skillLevel}, &nbsp;
                                                                                {skill.monthsOfExperience} months of experience&nbsp;
                                                                                
                                                                            </p>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            :
                                                            <Fragment>
                                                                <small className="text-danger">Not specified.</small>
                                                            </Fragment>
                                                        }
                                                </td>
                                            </tr>
                                        )
                                    })
                                :
                                    <tr>
                                        <td colSpan="6" className="alert alert-info">No data found.</td>
                                    </tr>
                                    
                            }
                        </tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>

        )
    }
}