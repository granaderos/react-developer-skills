import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Dashboard extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                    <div id="divDashboardContainer">
                        <h2>Developer Skills System Dashboard.</h2>
                        <h2>Put something here.</h2>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}