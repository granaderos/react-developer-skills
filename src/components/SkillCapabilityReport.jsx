import React, { Component, Fragment } from "react"
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
const baseAPIURL = "http://localhost:8080/api-developers/rest";

export default class SkillCapabilityReport extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          listCapabilityReport: [],
          listLevels: [],
        }
    }
    
    componentDidMount() {
        this.getListCapabilityReport();
        this.getListLevels();
    }
    
    // axios API requests
    getListCapabilityReport = () => {
        console.log("CALLED getListCapabilityReport");
        Axios.get(baseAPIURL+"/skills/capabilityReport")
            .then(res => {
                this.setState({
                    listCapabilityReport: res.data
                })
                console.log("REST = " + JSON.stringify(res));
            })
    }

    getListLevels = () => {
        console.log("CALLED getListLevels");
        Axios.get(baseAPIURL+"/skills/levels")
            .then(res => {
                this.setState({
                    listLevels: res.data
                })
                console.log("REST = " + JSON.stringify(res));
            })
    }

    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                <div className="container container-fluid">
                    <table className="table table-hover" id="tableSkillCapabilityReport">
                        <thead id="theadSkillCapabilityReport">
                            <tr>
                                <th>Skill</th>
                                {
                                    this.state.listLevels.map(level => {
                                        return(
                                                <th>{level}</th>
                                        )
                                    })
                                }
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody id="tbodySkillCapabilityReport">
                            {
                                this.state.listCapabilityReport.map(report => {
                                    return(
                                        <tr>
                                            <td>{report.skill}</td>
                                            {
                                                report.report.map(levelCount => {
                                                    return(
                                                        <td>{levelCount.count}</td>
                                                    )
                                                })
                                            }
                                            <td>{report.total}</td>
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
