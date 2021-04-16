import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="university"><a href={data.link}>{data.university}</a></h4>
      <h6 className="degree">{data.year}, {data.degree}</h6>
      <p className="school">{data.school}</p>
      <p className="thesis">Тема дипломной работы</p>
      <p className="description">{data.thesis}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    university: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    thesis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
