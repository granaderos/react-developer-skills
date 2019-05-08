import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        const { pathname } = this.props.location;

        return(

            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={pathname === "/" ? "active" : ""}>
                            <i></i>&nbsp;&nbsp;Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skill-assessments" className={pathname === "/skill-assessments" ? "active" : ""}>
                            <i></i>&nbsp;&nbsp;Skill Assessments
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/developers" className={pathname === "/developers" ? "active" : ""}>
                            <i></i>&nbsp;&nbsp;Developers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className={pathname === "/skills" ? "active" : ""}>
                            <i></i>&nbsp;&nbsp;Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills-capability-report" className={pathname === "/skills-capability-report" ? "active" : ""}>
                            <i></i>&nbsp;&nbsp;Skill Capability Report
                        </Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default Navigation;