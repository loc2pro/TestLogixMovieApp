import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import ViewLogin from "./Views/ViewLogin";
import ViewRegister from "./Views/ViewRegister";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={ViewLogin} />
          <Route path="/register" component={ViewRegister} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
