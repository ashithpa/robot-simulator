import { useState } from 'react';

const gridSize = 5;
const directions = ['N', 'E', 'S', 'W'];

const useRobot = () => {
  // Initialize the robot's position and direction state
  const [robot, setRobot] = useState({ x: 0, y: 0, direction: 'N' });

  // Function to move the robot forward based on its current direction
  const moveForward = () => {
    setRobot(prev => {
      let { x, y, direction } = prev;
      
      switch (direction) {
        case 'N': if (y > 0) y--; break; // Move north (up) if not at the top edge
        case 'E': if (x < gridSize - 1) x++; break; // Move east (right) if not at the right edge
        case 'S': if (y < gridSize - 1) y++; break; // Move south (down) if not at the bottom edge
        case 'W': if (x > 0) x--; break; // Move west (left) if not at the left edge
        default: break;
      }
      return { x, y, direction };
    });
  };

  // Function to rotate the robot to the next direction in the list
  const rotate = () => {
    setRobot(prev => {
      const currentIndex = directions.indexOf(prev.direction);
      // Calculate the new direction (cyclically)
      const newDirection = directions[(currentIndex + 1) % 4];
      return { ...prev, direction: newDirection };
    });
  };

  return { robot, moveForward, rotate };
};

export default useRobot;
