import React, { useState } from 'react';

import Exercises from './Exercises';
import SearchExercises from './SearchExercises';
import HeroBanner from './HeroBanner';
import './Home.css';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div className="home-container">
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  );
};

export default Home;
