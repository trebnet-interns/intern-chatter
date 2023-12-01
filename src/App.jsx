import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <Router>
        <div className="m-[2%]">
      <Register />
      <Switch>
        <Route path="/register" component="{Register}" />
      </Switch>
      <Switch>
        <Route path="/login" component="{Login}" />
      </Switch>
    </div>
    </Router>
    </>
    
  );
}

export default App;
