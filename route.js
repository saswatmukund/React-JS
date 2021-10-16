import React from "react";
import {
    BrowserRouter,
    Link,
    Route
} from "react-router-dom";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";

export default class MyRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/two">Comp 2</Link>
                    <Link to="/three">Comp 3</Link>

                    <Route exact path="/" component={Comp1} />
                    <Route path="/two" component={Comp2} />
                    <Route path="/three" component={Comp3} />

                </BrowserRouter>
            </div>
        )
    }
}