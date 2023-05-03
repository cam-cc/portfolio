import React from 'react';
import '../scss/Education.scss';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education__container">
        <div className="education__item">
          <h3 className="education__degree">Advanced Diploma Compuer Programming & Analysis</h3>
          <p className="education__university">Seneca College</p>
          <p className="education__date">Graduated June 2021</p>
        </div>
        <div className="education__item">
          <h3 className="education__degree">Certificate Data science & Machine Learning</h3>
          <p className="education__university"> Massachussets Institute of Technology - IDSS </p>
          <p className="education__date">Graduated May 2023</p>
        </div>
      </div>
    </section>
  );
}

export default Education;