import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Dashboard extends Component {
    render() {
        return(
            <Fragment>
                <Header location={this.props.location} />
                    <div>
                        <h2>Put something on this dashboard.</h2>
                    </div>
                <Footer />
            </Fragment>
        )
    }
}