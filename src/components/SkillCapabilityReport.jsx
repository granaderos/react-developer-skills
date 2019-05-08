import React, { Component, Fragment } from "react"
import Header from "./Header";
import Footer from "./Footer";

class SkillCapabilityReport extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                    <table className="table table-hover" id="tableSkillCapabilityReport">
                        <thead id="theadSkillCapabilityReport"></thead>
                        <tbody id="tbodySkillCapabilityReport"></tbody>
                    </table>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default SkillCapabilityReport;