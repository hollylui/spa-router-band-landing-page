import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Members from "./components/Members";

function App() {
  const members = [
    {
      name: "Amy Lee",
      param: "amy_lee",
      position: "Vocal",
    },
    {
      name: "Troy McLawhorn",
      param: "troy_mclawhorn",
      position: "Lead Guitar",
    },
    {
      name: "Jen Majura",
      param: "jen_majura",
      position: "Guitar",
    },
    {
      name: "Tim McCord",
      param: "tim_mccord",
      position: "Bass",
    },
    {
      name: "Will Hunt",
      param: "will_hunt",
      position: "Drum",
    },
  ];

  return (
    <div className="App">
      <img
        style={{ width: 200, height: 200, objectFit: "fit" }}
        src="../image/evanescence_cover.jpg"
        alt=""
      />

      {/* navbar -------------------------- */}
      <Router>
        <NavigationBar members={members} />
        <Switch>
          <Route exact path="/">
            <img className="memberPic" src="./image/home.jpg" alt="" />
          </Route>

          <Route path="/members/:memberName">
            <Members members={members} />
          </Route>

          <Route>
            <h2>Page is not found.</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
