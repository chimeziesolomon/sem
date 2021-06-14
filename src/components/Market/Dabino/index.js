
import semDebino from '../../assets/images/sem-debino.png';
export const Gallery = (props) => {
    return (
      <div id='portfolio' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Debino</h2>
            <p>
              For debino check here.
            </p>
          </div>
          <div className='row'>
            <div className='portfolio-items'>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   
                    <a
                      href='https://res.cloudinary.com/chimeziesolomon/image/upload/v1623169715/sem-debino_trx26x.png'
                      title='debino'
                      data-lightbox-gallery='gallery1'
                    >
                      <div className='hover-text'>
                        <h4>Sem Debino</h4>
                        <p>
                        Sem Date locally known as Dabino in Hausa is from the date palm tree, a flowering plant species in the palm family Aracaceae, cultivated for its edible sweet fruits

                        it has the following benefits
                        * date are highly nutritious
                        * Aids healthy bowel movements as a result of high fibre content
                        * high concentration of antioxidants
                        * improve brain functionality
                        * reduces risk of cancer
                        * prevent microbial infections
                        * help fight diabetes
                        * cures anaemia
                        * treat diarrhoea
                        * bone health. They are useful in strengthening bones and curing diseases like osteoporosis
                        * treatments of allergies
                        * treatments of night blindness
                        * treatment of sexual weakness
                        * promote weight gain
                        * dental health. Inhibit tooth decay by removing plaque thus strengthening the tooth enamel
                        * beneficial for pregnant women. It improves the mother's milk by providing adequate nutrition as well as improving the uterus muscles
                        * offers quick comfort and a great treatment for alcoholic intoxication
                        * it maintains healthy skin as it contains vitamin B5
                        * minimises hair loss.
                        </p>
                      </div>
                      <img
                        src={semDebino}
                        className='img-fluid img-thumbnail'
                        alt='debino'
                      />{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  