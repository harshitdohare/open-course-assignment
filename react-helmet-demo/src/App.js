import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>React Helmet Demo</title>
        <meta name="description" content="This is a demo of React Helmet." />
      </Helmet>
      <h1>Welcome to React Helmet POC</h1>
    </div>
  );
};

export default App;
