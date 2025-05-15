import './App.css';
import {React19ProducerButton} from "./React19ProducerButton.tsx";
import React from 'react';
import {React192ProducerButton} from "./React192ProducerButton.tsx";

const App = () => {
  return (
    <div className="content">
      <h1>Multiple React Versions Showcase</h1>
      <div>
        Consumer React version: {React.version}
        <hr />
      </div>
      <React19ProducerButton/>
      <React192ProducerButton />
    </div>
  );
};

export default App;
