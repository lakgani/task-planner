import React from "react";
import 'bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Tasks from "./routes/Tasks";
import Groups from "./routes/Groups";
import Page404 from "./routes/Page404";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <nav class="nav nav-pills d-flex flex-xs-column flex-sm-row justify-content-end">
          <NavLink to="/" className="flex-xs-fill nav-link" activeClassName="active" exact>Tasks</NavLink>
          <NavLink to="/groups" className="flex-xs-fill nav-link" activeClassName="active">Groups</NavLink>
          <NavLink to="/counter" className="flex-xs-fill nav-link" activeClassName="active">Counter</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>
          <Route path="/groups">
            <Groups />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

