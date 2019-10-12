import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intention from '../../components/Intention';
import IntentionList from '../IntentionList';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/intention/:id" component={Intention} />
    </Router>
  );
};

export default AppRouter;