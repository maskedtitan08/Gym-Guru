import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className="button-stack">
      <button className="exercise-button body-part">{exercise.bodyPart}</button>
      <button className="exercise-button target">{exercise.target}</button>
    </div>
    <p className="exercise-name">{exercise.name}</p>
  </Link>
);

export default ExerciseCard;
