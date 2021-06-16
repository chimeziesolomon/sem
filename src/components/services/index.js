import { Link } from 'react-router-dom';
export const Services = (props) => {
  console.log(props);
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Our unique services include</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((service, i) => (
                <Link to={`services/${service.name}`} key={`${service.name}-${i}`}>
                  <div className="col-md-4">
                    {' '}
                    <i className={service.icon}></i>
                    <div className="service-desc">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </Link>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
