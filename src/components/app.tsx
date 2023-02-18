import { h } from "preact";
import { Route, Router } from "preact-router";
import { createHashHistory } from "history";

import Home from "../routes/home";

const App = () => (
  <div id="app">
    <main>
      {/* wtf, right? */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Router history={createHashHistory()}>
        <Route path="/:*" component={Home} />
      </Router>
    </main>
  </div>
);

export default App;
