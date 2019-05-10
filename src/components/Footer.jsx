import React, { Component } from "react"

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© 2019 Copyright:
                    Developer Skill System
                    <br />
                    dev <a href="https://github.com/granaderos"> granaderos</a>
                </div>
            </footer>
        );
    };
}

export default Footer;