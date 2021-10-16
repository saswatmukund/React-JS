import React from "react";


export default class App extends React.Component{
constructor(props){
   super(props);
 
   this.state = {
     name: "Nextstacks"
   }
    
}

handleName= (event) => {
  this.setState({
    name: event.target.value
  });

}

handleClick = () =>{
  this.setState({
    name: ""
  })
}

    render(){
      return(
        <div>
          <input value={this.state.name} onChange={this.handleName}/>

          {this.state.name}
          <button onClick={this.handleClick}>
            Reset name
          </button>
          </div>
      )
    }
}
