import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Adder from "./mycode/adder";
import Arrays from "./mycode/arrays";
import ArraysProject from "./mycode/arraysProject"
import Styling from "./mycode/styling"
import Lifecycle from "./mycode/lifecycle";
import MaterialComp from "./mycode/materialComp";
import MaterialDialog from "./mycode/materialDialog";
import MyRouter from "./routing/route";

ReactDOM.render(
  <React.StrictMode>
    <ArraysProject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();