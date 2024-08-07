import React from 'react';
import './Grid.css';

const directions = ['N', 'E', 'S', 'W'];

const Grid = ({ robot }) => (
  <div className="grid">
    {/* Create a grid with 25 cells ( 5 x 5) */}
    {Array.from({ length: 25 }).map((_, index) => {
      // Calculate the x and y coordinates of the cell based on the index
      const x = index % 5;
      const y = Math.floor(index / 5);
      // Check if the robot is in the current cell
      const isRobotHere = robot.x === x && robot.y === y;

      return (
        <div
          key={index}
          className={`cell ${isRobotHere ? 'robot' : ''}`} // Apply 'robot' class  based on the condition
          style={{
            // Rotate the robot image based on its direction
            transform: isRobotHere ? `rotate(${directions.indexOf(robot.direction) * 90}deg)` : 'none',
            backgroundImage: isRobotHere ? `url(/robo.png)` : 'none',
            backgroundSize: 'contain', // Ensure the image fits within the cell
            backgroundRepeat: 'no-repeat',  
            backgroundPosition: 'center',  
          }}
        />
      );
    })}
  </div>
);

export default Grid;
