import React from 'react';
import SemSpices from './../../assets/images/sem-spices.jpeg';
import SemTea from './../../assets/images/sem-banner.jpeg';
import SemGranular from './../../assets/images/sem-spices.jpeg';
import SemCatering from './../../assets/images/sem-cereal.jpeg';
import SemDates from './../../assets/images/sem-date-powder.jpeg';
import '../../default.scss';

//Import Images

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${SemSpices})`,
          }}>
          <a>Sem Spices</a>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${SemTea})`,
          }}>
          <a>Sem Tea</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${SemGranular})`,
          }}>
          <a>Sem Granular</a>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${SemCatering})`,
          }}>
          <a>Sem Catering</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${SemDates})`,
          }}>
          <a>Sem Dates</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
