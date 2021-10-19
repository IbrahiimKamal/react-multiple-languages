import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-i18n';

import Home from './components/Home';
import Hello from './components/Hello';

const base = '/:locale(en|fr|ar)?';

const App = () => (
  <Router>
    <>
      {/* This will not work because it does not receive `locale` */}
      {/* <Link to="/home">Home</Link> */}

      {/* Use code like this instead */}
      <Route path={base} render={() => <Link to="/home">Home</Link>} />

      <Route exact path={base} component={Home} />
      <Route path={`${base}/hello`} component={Hello} />
    </>
  </Router>
);

export default App;
