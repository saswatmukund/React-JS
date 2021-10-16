import React from "react";
import {
    Link
} from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent
} from "@mui/material";

export default class Comp1 extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:""
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <TextField
                         variant="otlined"
                         margin="dense"
                         label="email"
                         value={this.state.email}
                         onChange={this.handleEmail}
                        />

                    </CardContent>
                </Card>

            </div>
        );
    }
}