import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Skills extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                    <form id="formSkill">
                        <label>Skill:</label>
                        <input className="form-control" type="text" name="skill" id="skill" required />
                        <br />
                        <button className="btn btn-primary">Add</button>
                    </form>
                    <br />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Skill</th>
                            </tr>
                        </thead>
                        <tbody id="tbodySkills"></tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>
        )
    }
}