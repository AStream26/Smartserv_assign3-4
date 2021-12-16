import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/LoginPage/Login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Login} />
      </Switch>
    </>
  );
}

export default App;
