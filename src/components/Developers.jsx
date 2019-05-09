import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

import {Modal, Button} from 'react-bootstrap'

import $ from 'jquery';
import jqueryValidation from 'jquery-validation'
import Axios from 'axios';


window.$ = window.jQuery = $;


const baseAPIURL = "http://localhost:8080/api-developers/rest";
const config = {
    headers : {
        'Content-Type' : 'application/json'
    }
}

export default class Developers extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          listDevelopers: [],
          listSkills: [],
          listSkillCapabilityReport: [],
          dev: {
              developerId: null,
              firstName: "",
              middleName: "",
              lastName: "",
              birthDate: null,
              position: ""
          },
          skill: {},
          skillAssessment: {},
          show: false
        }
    }
    
    componentDidMount() {
        this.getListDevelopers();
        this.formValidations();
    }
    
    // axios API requests
    getListDevelopers = () => {
        console.log("CALLED getListDevelopers");
        Axios.get(baseAPIURL+"/developers")
            .then(res => {
                this.setState({
                    listDevelopers: res.data
                });
                console.log("REST = " + JSON.stringify(res));
            });
    }

    handleFilterDevFormSubmit = (e) => {
        e.preventDefault();

        var skill = $("#sSkill").val();
        // var skillLevel = $("#sSkillLevel").val();
        // var monthsOfExperience = $("#sMonthsOfExperience").val();
        var firstName = $("#sFirstName").val();
        var lastName = $("#sLastName").val();

        var queryParam = "";
        if(skill.trim().length > 0) queryParam += "skill="+skill;
        // if(skillLevel.trim().length > 0) {
        //     if(queryParam != "") queryParam += "&";
        //     queryParam += "skillLevel="+skillLevel;
        // }

        // if(monthsOfExperience.trim().length > 0) {
        //     if(queryParam != "") queryParam += "&";
        //     queryParam += "monthsOfExperience="+monthsOfExperience;
        // } 
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

    handleShowAddDevModal = () => {
        this.setState({show: true});
    }

    handleCloseAddDevModal = () => {
        this.setState({show: false});

    }

    handleAddDevBtnClick = () => {
        $("#formDeveloper").submit();
    }

    handleAddDevFormSubmit = (e) => {
        e.preventDefault();
        // this.formValidations();
        var devData = this.state.dev;
        Axios.post(baseAPIURL + "/developers/add", devData, config)
            .then(res => {
                console.log(JSON.stringify(res));
                alert(res.data);
                if(res.data == "New developer has been successfully added.") {
                    this.setState({show: false});
                    this.getListDevelopers();
                }
                
            })
    }

    handleChangeDevData = (e) => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
            dev: {
                ...prevState.dev,
                [name]: value
            }
        }));
        console.log("dev = " + JSON.stringify(this.state.dev));
    }

    formValidations = () => {
        $("#formDeveloper").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 2,
                    maxlength: 255
                },
                lastName: {
                    required: true,
                    minlength: 2,
                    maxlength: 255
                },
                middleName: {
                    required: false,
                    maxlength: 255
                },
                birthDate: {
                    required: true,
                },
                position: {
                    required: true,
                    minlength: 2,
                    maxlength: 255
                }
            },
            messages: {
                firstName: {
                    required: "Please provide a first name.",
                    minlength: "First name must be at least 2 characters long.",
                    maxlength: "First name  must be at most 255 characters long."
                },
                lastName: {
                    required: "Please provide a last name.",
                    minlength: "Last name must be at least 2 characters long.",
                    maxlength: "Last name  must be at most 255 characters long."
                },
                middleName: {
                    required: "Please provide a password",
                    maxlength: "Middle name  must be at most 255 characters long."
                },
                birthDate: {
                    required: "Please provide a birth date."
                },
                position: {
                    required: "Please provide a position.",
                    minlength: "Position must be at least 2 characters long.",
                    maxlength: "Position  must be at most 255 characters long."
                }
            }
        });
    
        $("#formSkill").validate({
            rules: {
                skill: {
                    required: true,
                    minlength: 2,
                    maxlength: 255
                },
            },
            messages: {
                skill: {
                    required: "Please provide a skill.",
                    minlength: "Skill must be at least 2 characters long.",
                    maxlength: "Skill  must be at most 255 characters long."
                }
            }
        });
    
        $("#formSkillAssessment").validate({
            rules: {
                saDeveloper: {
                    required: true
                },
                saSkill: {
                    required: true
                },
                saSkillLevel: {
                    required: true
                },
                saMonthsOfExperience: {
                    required: true,
                    digits: true
                }
            },
            messages: {
                saDeveloper: {
                    required: "Please select a developer."
                },
                saSkill: {
                    required: "Please select a skill."
                },
                saSkillLevel: {
                    required: "Please select a skill level."
                },
                saMonthsOfExperience: {
                    required: "Please provide months of experience.",
                    digits: "Please provide a valid months of experience."
                }
            }
        });
    }

    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                <Modal show={this.state.show} onHide={this.handleCloseAddDevModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Developer Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formDeveloper" method="POST" onSubmit={this.handleAddDevFormSubmit}>
                            <div>
                                <label for="firstName">First Name:</label>
                                <input onChange={this.handleChangeDevData} type="text" className="form-control" name="firstName" id="firstName" required />
                            </div>
                            <div>
                                <label for="middleName">Middle Name:</label>
                                <input onChange={this.handleChangeDevData} type="text" className="form-control" name="middleName" id="middleName" />
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <input onChange={this.handleChangeDevData} type="text" className="form-control" name="lastName" id="lastName" />
                            </div>
                            <div>
                                <label>Birth Date:</label>
                                <input onChange={this.handleChangeDevData} type="text" className="form-control" name="birthDate" id="birthDate" />
                            </div>
                            <div>
                                <label>Position:</label>
                                <input onChange={this.handleChangeDevData} type="text" className="form-control" name="position" id="position" />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleAddDevFormSubmit}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={this.handleCloseAddDevModal}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                    <br />
                    <button className="pull-right btn btn-lg btn-primary" onClick={this.handleShowAddDevModal}>Add a Developer</button>
                    {/* Dev table and search form */}
                    <form method="GET" id="formSearchDev" onSubmit={this.handleFilterDevFormSubmit}>
                        <fieldset>
                            <legend>Filter Developers:</legend>
                            <small>First Name:</small> <input type="text" className="form-control-sm form-control" name="sFirstName" id="sFirstName" />
                            <small>Last Name:</small> <input type="text" className="form-control-sm form-control" name="sLastName" id="sLastName" />
                            <small>Skill:</small> <input type="text" className="form-control-sm form-control" name="sSkill" id="sSkill" />
                            {/* <small>Skill Level:</small> <input type="text" className="form-control-sm form-control" name="sSkillLevel" id="sSkillLevel" />
                            <small>Months of Experience:</small> <input type="text" className="form-control-sm form-control" name="sMonthsOfExperience" id="sMonthsOfExperience" /> */}
                        </fieldset>
                        <br />
                        <input type="submit" className="btn btn-primary" value="Search" />&nbsp;&nbsp;
                        <input type="reset" className="btn btn-warning" value="Reset Form" />&nbsp;&nbsp;

                    </form>
                    <br />
                    <table id="tableDevs" className="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th rowSpan="2">Developer ID</th>
                                <th valign="center"rowspan="2">Name</th>
                                <th rowSpan="2">Birth Date</th>
                                <th rowSpan="2">Position</th>
                                <th colSpan="3">Skill/s</th>
                            </tr>

                        </thead>
                        <tbody id="tbodyDevelopers">
                            {
                                this.state.listDevelopers.map((dev, index) => {
                                    var rowSpan = dev.skills.length;
                                    return(
                                        <tr rowSpan={rowSpan} key={dev.developer.developerId}>
                                            <td>{index+1}</td>
                                            <td>{dev.developer.developerId}</td>
                                            <td>{dev.developer.firstName} {dev.developer.middleName} {dev.developer.lastName}</td>
                                            <td>{dev.developer.birthDate}</td>
                                            <td>{dev.developer.position}</td>
                                            <td>
                                                <ul>
                                                    {
                                                        dev.skills.length > 0 ?
                                                            dev.skills.map(skill => {
                                                                return(
                                                                    <li>
                                                                        {skill.skill}
                                                                    </li>
                                                                )
                                                            })
                                                        :
                                                        <small className="text-danger">Not specified.</small>
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>
        );
    }
}