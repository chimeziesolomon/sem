import React from 'react';
import { Link } from 'react-router-dom';
import SemSpices from './../../assets/images/sem-spices.jpeg';
import SemTea from './../../assets/images/sem-calming-tea.jpeg';
import SemGranular from './../../assets/images/sem-soursopleaf-spice.jpeg';
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
       <Link to="/search/spices">
            Sem Spices
          </Link>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${SemTea})`,
        }}>
        <Link to="/search/tea">
            Sem Tea
          </Link>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${SemGranular})`,
        }}>
        <Link to="/search/granular">
            Sem Granular
          </Link>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${SemCatering})`,
        }}>
        <Link to="/search/catering">
            Sem Catering
          </Link>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${SemNaturalSweetner})`,
        }}>
       <Link to="/search/naturalsweetner">
            Sem Natural Sweetner
          </Link>
      </div>
    </div>
    </div>
  );
};

export default Directory;
