import React from 'react';
import SemSpices from './../../assets/images/sem-spices.jpeg';
import SemTea from './../../assets/images/sem-banner.jpeg';
import SemGranular from './../../assets/images/sem-spices.jpeg';
import SemCatering from './../../assets/images/sem-cereal.jpeg';
import SemNaturalSweetner from './../../assets/images/sem-date-powder.jpeg';
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
        <a>Sem MSG-free Catering</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${SemNaturalSweetner})`,
        }}>
        <a>Sem Natural Sweetner</a>
      </div>
    </div>
    </div>
  );
};

export default Directory;
