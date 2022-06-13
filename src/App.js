import "./App.css";
import React, { Fragment } from "react";
import Profile from "./component/Profile";

import Navbar from "./component/Navbar";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="text-center" style={{ paddingTop: 50 }}>
        <Profile />
      </div>
    </Fragment>
  );
}

export default App;
