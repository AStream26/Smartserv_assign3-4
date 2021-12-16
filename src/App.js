import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/LoginPage/Login";

function App() {
  let [islogin, SetLogin] = useState(false);

  return (
    <>
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login {...props} setLogin={SetLogin} />}
        />

        <Route
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} login={islogin} setLogin={SetLogin} />
          )}
        />
        <Route component={Login} />
      </Switch>
    </>
  );
}

export default App;
