import React from "react";

export default class Second extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a: 0
        }
    }
    componentDidMount(){
        console.log("hi from comp did mount");
        //API CALL TO GET ALL THE STUDENTS DATA
    }

    componentDidUpdate(){
      console.log("hi from comp did update");
    }

    componentWillUnmount(){
        console.log("hi from comp will unmount");
    }

    render(){
        console.log("hi from render");
        return(
            <div>
                Hello from Second Comp
                <input 
                onChange={(e)=>{
                    this.setState({
                        a: e.target.value
                    })
                }}
                />
            </div>
        )
    }
}