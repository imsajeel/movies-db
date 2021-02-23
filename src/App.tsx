import React from "react";
import Layout from "./components/layout";
import "./tailwind.min.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/movies/id=:id">
            <MoviePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
