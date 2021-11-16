import { Route, Switch } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/LoginPage";
import Logout from "./pages/Logout/Logout";
import SingupPage from "./pages/Singup/SingupPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <SingupPage />
        </Route>
        <Route path="/singup" exact>
          <SingupPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
