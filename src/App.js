import HomepageLayout from "./Homepage";
import ProjectLayout from "./Projectspage";
import CareerLayout from "./Careerpage";
import CareerDetailLayout from "./CareerDetailspage";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomepageLayout} />
      <Route exact path="/projects" component={ProjectLayout} />
      <Route exact path="/careers" component={CareerLayout} />
      <Route exact path="/careersDetails/:id" component={CareerDetailLayout} />
    </Router>
  );
}

export default App;
