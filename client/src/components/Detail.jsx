import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import './ExerciseDetail.css';

const Detail = ({ exerciseDetail }) => {
  // console.log(exerciseDetail);
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;
  // console.log(instructions);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <>
      <div className="detail-container">
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <div className="detail-info">
          <h1 className="detail-title">{name}</h1>
          <p className="detail-description">
            Exercises keep you strong. <span className="capitalize">{name}</span> is one
            of the best exercises to target your {target}. It will help you improve your
            mood and gain energy.
          </p>
          {extraDetail.map((item) => (
            <div key={item.name} className="extra-detail">
              <div className="extra-detail-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <span className="extra-detail-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="instructions-container">
        <div className="instructions-title">
          <h3>Instructions to do the exercise</h3>
          </div>
        {instructions && instructions.map((instruction, index) => (
          <div key={index} className="detail-instructions">
            <p>{instruction}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail;
