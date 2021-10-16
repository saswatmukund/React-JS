import React from "react";

export default class Arrays extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            arr: [
              {  
                   name: "Soumava",
                   address: "Kolkata"
              },
              {  
                name: "Krishna",
                address: "Dwarka"
           }
           
           ]
        }
    }

     handlePush = () => {
         var temp = this.state.arr;
         temp.push({
             name: "Sunny",
             address: "Bhubaneswar"
         });
         this.setState({
             arr: temp
         })
     }

     handlePop = () => {
         var temp = this.state.arr;
         temp.pop();
         this.setState({
             arr:temp
         })
     }
       
     handleSplice = () => {
         var temp = this.state.arr;
         temp.splice(1, 1);
         this.setState({
             arr: temp
         })
     }
    
    render(){
        return(
            <div>
                Hello from arrays Component
                {this.state.arr.map ( (single, index)=> {
                    return (
                        <div>
                            {single.name}-{single.address}
                        </div>
                    )
                })}

                <button
                  onClick={this.handlePush}
                >
                    push
                </button>
                <button
                  onClick={this.handlePop}
                >
                   pop  
                </button>

                <button
                  onClick={this.handleSplice}
                >
                   Splice
                </button>
            </div>
        )
    }
}