import React from "react";
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogTitle
} from "@mui/material";

export default class MaterialDialog extends React.Component {
    constructor(props){
        super(props);

        this.state = {
         dialogOpen: false
        }
    }
    render() {
        return (
            <div>
                <h1> MLH Hackathon </h1>

                <Button
                  onClick={()=>{
                      this.setState({
                          dialogOpen: true
                      })
                  }}
                >
                    Open Dialog
                </Button>
               <Dialog
                 open={this.state.dialogOpen}
               >
                   <DialogTitle>
                       Code of Conduct                  
                   </DialogTitle>
                   <DialogContent>
                        Read and agree with Code of Conduct
                   </DialogContent>
                   <DialogActions>
                       <Button>
                           Yes
                       </Button>
                   </DialogActions>
               </Dialog>
            </div>
        )
    }
}