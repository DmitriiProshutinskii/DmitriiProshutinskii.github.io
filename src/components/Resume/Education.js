import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="образование" />
    <div className="title">
      <h3>Образование</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    university: PropTypes.string,
    school: PropTypes.string,
    degree: PropTypes.string,
    theis: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
