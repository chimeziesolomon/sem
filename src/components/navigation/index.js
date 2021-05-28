import Logo from '../../assets/images/sem-logo.jpeg'
export const Navigation = (props) => {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand  page-scroll' href='#page-top'>
            <img className='logo'
            style={{width: '34px'}} 
                src={Logo}  alt="Sem Logo"
                className='img-fluid img-thumbnail'
                        
                />
              
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a to="/" 
                href='#features' className='page-scroll'>
                  Features
                </a>
              </li>
              <li>
                <a to="/" 
                href='#about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a to="/" 
                href='#services' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a to="/" 
                href='#portfolio' className='page-scroll'>
                  Gallery
                </a>
              </li>
              <li>
                <a to="/"
                href='#testimonials' className='page-scroll'>
                  Testimonials
                </a>
              </li>
              <li>
                <a to="/"
                href='#team' className='page-scroll'>
                  Team
                </a>
              </li>
              <li>
                <a to="/"
                href='#contact' className='page-scroll'>
                  Contact
                </a>
              </li>
              
              <li>
                <a to="/search"
                href='#search' className=''>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
      
    );
  };

 