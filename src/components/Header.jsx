import React, { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
    render() {
        return (
            <div id="div_header" className="header">
                {/* <h3>DEVELOPER SKILLS</h3> */}
                <Navigation location={this.props.location}/>
            </div>
        )
    };
}

export default Header;