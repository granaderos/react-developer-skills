import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";

import $ from 'jquery';
import jqueryValidation from 'jquery-validation'

window.$ = window.jQuery = $;

const baseAPIURL = "http://localhost:8080/api-developers/rest";

const config = {
    headers : {
        'Content-Type' : 'application/json'
    }
}

export default class Skill extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          listSkills: [],
          skill: {
              skillId: null,
              skill: ""
          }
        }
    }
    
    componentDidMount() {
        this.getListSkills();
    }
    
    // axios API requests
    getListSkills = () => {
        console.log("CALLED getListSkills");
        Axios.get(baseAPIURL+"/skills")
            .then(res => {
                this.setState({
                    listSkills: res.data
                })
                console.log("REST = " + JSON.stringify(res));
            })
    }

    handleAddSkillFormSubmit = (e) => {
        e.preventDefault();

        var skillData = this.state.skill;
        if(skillData.skill.trim().length > 0) {
            Axios.post(baseAPIURL + "/skills/add", skillData, config)
                .then(res => {
                    alert(res.data);
                    if(res.data == "New skill has been successfully added.") {
                        $("#skill").val("");
                    }
                    this.getListSkills();
                });
        } else {

        }
    }


    // methods
    handleChangeSkillData = (e) => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
            skill: {
                ...prevState.skill,
                [name]: value
            }
        }));
    }

    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                    <div id="divAddSkill">
                        <h3>Add a Skill</h3>
                        <form id="formSkill" method="POST" onSubmit={this.handleAddSkillFormSubmit}>
                            <label>Skill:</label>
                            <input onChange={this.handleChangeSkillData} className="form-control" type="text" name="skill" id="skill" required />
                            <br />
                            <button className="btn btn-primary">Add</button>
                        </form>
                    </div>

                    
                    <br />
                    <h3>List of Skills</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody id="tbodySkills">
                            {
                                this.state.listSkills.map((skill, index) => {
                                    return(
                                        <tr key={skill.skillId}>
                                            <td>{index+1}</td>
                                            <td>{skill.skill}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>
        )
    }
}