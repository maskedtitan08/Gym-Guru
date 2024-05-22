import React, { useEffect, useState, useRef } from 'react';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import './Home.css';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1000', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?offset=0&limit=1000`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const currentExercises = exercises && exercises.length > 0 
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  const getVisiblePages = (totalPages, currentPage) => {
    const visiblePages = 10;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = start + visiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visiblePages + 1);
    }

    return { start, end };
  };

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);
  const { start, end } = getVisiblePages(totalPages, currentPage);
  const visiblePageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const scrollLeft = () => {
    if (paginationRef.current) {
      paginationRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (paginationRef.current) {
      paginationRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="exercises-container">
      <h4 className="exercises-title">Showing Results</h4>
      <div className="exercises-list">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>
      <div className="pagination-container">
        {totalPages > 1 && (
          <div className="pagination-wrapper">
            <div className="pagination" ref={paginationRef}>
              {visiblePageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={(e) => paginate(e, pageNumber)}
                  className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
