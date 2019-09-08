/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch, Redirect, Link } from "react-router-dom";
import SignInSide from "components/SideSignIn/Sidesignin";
// core components
import Admin from "layouts/Admin.js";
//import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();
//console.log(hist);

 ReactDOM.render(
   <Router history={hist}>
     <Switch>
       <Route path="/signin" component={SignInSide} />
       <Redirect from="/" to="/signin" />
       {/* <Redirect from="/" to="/admin/dashboard" /> */}
     </Switch>
   </Router>,
   document.getElementById("root")
 );

