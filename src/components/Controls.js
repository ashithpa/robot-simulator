import React from 'react';

const Controls = ({ moveForward, rotate }) => (
  <div className="controls">
    <button onClick={rotate} aria-label="Rotate Robot">Rotate</button>
    <button onClick={moveForward} aria-label="Move Forward">Move Forward</button>
  </div>
);

export default Controls;
