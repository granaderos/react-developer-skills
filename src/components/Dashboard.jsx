import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Dashboard extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                    <div id="divDashboardContainer">
                        <h3>Developer Skills System's dashboard.</h3>
                        <h3>Put something here.</h3>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}