import React from "react";
import "./style.css";

export default class Styling extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#ff0000", width: 200, textAlign: "center" }}
                >
                    Nextstacks
                </div>
                <br />
                <div className="mydiv2">
                    Appstone
                </div>
                <div>
                    <br />
                    <br />
                    {this.state.loggedIn === true?"you are logged in":"you are logged out"}
                    <br />
                    {this.state.loggedIn === true && "You are logged in"}
                    </div>
            </div>
        )
    }
}