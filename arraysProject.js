import React from "react";

export default class ArraysProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [],
            taskInput: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }

    pushTask = () => {
        var temp = this.state.tasksArr;
        temp.push(this.state.taskInput);
        this.setState({
            tasksArr: temp,
            taskInput: ""
        })
    }

    handleComplete = (index) => {
        var temp = this.state.tasksArr;
        temp.splice(index, 1);
        this.setState({
            tasksArr: temp
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.taskInput}
                    onChange={this.handleInput}
                />
                <button
                    disabled={this.state.taskInput === "" ? true : false}
                    onClick={this.pushTask}
                >
                    Add task
                </button>
                {this.state.tasksArr.length === 0 ?
                    <h1>You have no task in your list enjoy your day</h1>
                    :
                    <h1>Tasks to do</h1>
                }
                <div
                 style={{
                     backgroundColor: "#f2f2f2",
                     padding: 20,
                     borderRadius: 10,
                     width: 200
                 }}
                >
                    <ol>
                        {this.state.tasksArr.map((single, index) => {
                            return (
                                <li>
                                    {single}
                                    <button
                                        onClick={() => {
                                            this.handleComplete(index)
                                        }}
                                    >
                                        Completed
                                    </button>
                                </li>
                            )

                        })}
                    </ol>
                </div>

            </div>
        )
    }
}