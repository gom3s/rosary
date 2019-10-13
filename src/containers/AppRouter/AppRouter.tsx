import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from 'src/components/Header';
import IntentionPage from '../../components/Intention';
import IntentionList from '../IntentionList';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact={true} component={IntentionList} />
      <Route path="/intention/:id" component={IntentionPage} />
    </Router>
  );
};

export default AppRouter;