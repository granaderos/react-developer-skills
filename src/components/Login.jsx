import React, { Component, Fragment } from "react";
import Footer from "./Footer";

import $ from 'jquery';
window.$ = window.jQuery = $;

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }
    }

    componentDidMount() {

        if(this.state.username == "granaderos") {
            window.location.href = "/"
        }
    }

    handleLogin = () => {
        var username = $("#username").val();
        var password = $("#password").val();

        if(username == "granaderos" && password == "00101111") {
            this.setState({username: username});

            window.location.href = "/";
        } else {
            alert("Please enter valid username and password.")
        }
    }

    render() {
        return(
            <Fragment>
                <div id="divLoginContainer">
                    <h4>Developer Skills System</h4>
                    <br />
                    <form>
                        {/* <label>username:</label> */}
                        <input type="text"  className="form-control" name="username" id="username" placeholder="username" />
                        {/* <label>password:</label> */}
                        <br/>
                        <input type="password" className="form-control" name="password" id="password" placeholder="password" />
                    </form>
                    <br />
                    <button onClick={this.handleLogin} class="btn btn-primary">Log In</button>

                </div>
                <Footer />
            </Fragment>
        )
    }
}