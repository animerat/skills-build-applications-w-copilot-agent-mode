import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://urban-space-guide-j7x4q67v7pxh57p4-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Workouts</h1>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout._id} className="list-group-item">
            <strong>{workout.name}</strong>: {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
