import semForeignDish from '../../../assets/images/sem-foriegnmeal.PNG';
import semJollofMeal from '../../../assets/images/sem-jollofmeal.PNG';

const MsgFood = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Food</h2>
          <p>Any type of food, call on us.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <a
                    href="https://res.cloudinary.com/chimeziesolomon/image/upload/v1623170129/sem-jollofmeal_kpkeq2.png"
                    title="Sem Jollof meal"
                    data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Sem Jollof Meal</h4>
                      <p>Sem Jollof meal for you</p>
                    </div>
                    <img
                      src={semJollofMeal}
                      className="img-fluid img-thumbnail"
                      alt="jollof meal"
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {' '}
                  <a
                    href="https://res.cloudinary.com/chimeziesolomon/image/upload/v1623170113/sem-foriegnmeal_e1ciok.png"
                    title="Sem forign meal"
                    data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                      <h4>Sem Forign Meal</h4>
                      <p>Your foreign dishes are ready</p>
                    </div>
                    <img
                      src={semForeignDish}
                      className="img-fluid img-thumbnail"
                      alt="foreign dish"
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgFood;
