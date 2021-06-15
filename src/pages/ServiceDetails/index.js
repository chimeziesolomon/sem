import { useParams } from 'react-router-dom';

import { Dabino, Granola, MsgFood, MsgTraining, Spices, Teas } from '../../components/Market';

const ServiceDetails = () => {
  const { serviceName } = useParams();
  switch (serviceName) {
    case 'spices':
      return <Spices />;
    case 'granola':
      return <Granola />;
    case 'teas':
      return <Teas />;
    case 'training':
      return <MsgTraining />;
    case 'food':
      return <MsgFood />;
    case 'dabino':
      return <Dabino />;
    default:
      return null;
  }
};

export default ServiceDetails;
