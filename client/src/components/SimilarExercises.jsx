import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import './ExerciseDetail.css';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="similar-exercises-container">
    <h1 className="similar-exercises-title">
      Similar <span className="highlight">Target Muscle</span> exercises
    </h1>
    <div className="similar-exercises-list">
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </div>
    <h1 className="similar-exercises-title" style={{ marginTop: '60px' }}>
      Similar <span className="highlight">Equipment</span> exercises
    </h1>
    <div className="similar-exercises-list">
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </div>
  </div>
);

export default SimilarExercises;
