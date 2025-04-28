import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function SkillProgress({ skillName, percentage }) {
  return (
    <div className="my-3">
      <h5 className="text-white">{skillName}</h5>
      <ProgressBar now={percentage} label={`${percentage}%`} />
    </div>
  );
}

export default SkillProgress;
