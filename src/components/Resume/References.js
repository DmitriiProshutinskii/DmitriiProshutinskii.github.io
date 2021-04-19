import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="ссылки" />
    <div className="title">
      <Link to="/contact">
        <h3>Больше информации по запросу</h3>
      </Link>
    </div>
  </div>
);

export default References;
