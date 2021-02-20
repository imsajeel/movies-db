import React from "react";
import Layout from "./components/layout";
import "./tailwind.min.css";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
