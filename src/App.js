import React from 'react';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Controls';
import useRobot from './hooks/useRobot';

const App = () => {
  const { robot, moveForward, rotate } = useRobot();

  return (
    <div className="container">
      <h1>Robot Simulator</h1>
      <div className="grid-container">
        <Grid robot={robot} />
      </div>
      <Controls moveForward={moveForward} rotate={rotate} />
    </div>
  );
};

export default App;
