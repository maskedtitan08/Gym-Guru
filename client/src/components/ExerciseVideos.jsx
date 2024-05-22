import React from 'react';
import Loader from './Loader';
import './ExerciseDetail.css';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="exercise-videos-container">
      <h1 className="exercise-videos-title">
        Watch <span className="highlight">{name}</span> exercise videos
      </h1>
      <div className="exercise-videos-list">
        {exerciseVideos.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className="exercise-video-thumbnail" src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div className="exercise-video-info">
              <h2 className="exercise-video-title">{item.video.title}</h2>
              <p className="exercise-video-channel">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
