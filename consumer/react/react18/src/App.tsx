import './App.css';
import {React19ProducerButton} from "./React19ProducerButton.tsx";
import React from 'react';

const App = () => {
  return (
    <div className="content">
      <h1>Multiple React Versions Showcase</h1>
      <div>
        Consumer React version: {React.version}
        <hr />
      </div>
      <React19ProducerButton/>
    </div>
  );
};

export default App;
