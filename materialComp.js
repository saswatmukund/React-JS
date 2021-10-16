import React from "react";
import {
    Button,
    TextField
} from "@mui/material";

export default class MaterialComp extends React.Component {
    render() {
        return (
            <div>
                <TextField
                  variant="outlined"
                  color="secondary"
                  margin="dense"
                />
                <Button
                   variant="text"
                   color="secondary"
                >
                    hello
                </Button>

            </div>
        )
    }
}