import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import ActivatePage from "./../activate";
import { Switch, Route, Router } from "./../../util/router.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";
import lunna from "../../assets/Lunna@2x.png";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar href="#form" spaced={true} logo={lunna} />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/activate" component={ActivatePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
