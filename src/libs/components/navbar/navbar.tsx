// import logo from '../../../logo.svg';

import './navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='navbar_logo'>
            <a className="navbar-brand" href="#">Vox</a>
        </div>
        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>*/}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li><a className="nav-item nav-link active" href="#">Home</a></li>
                <li><a className="nav-item nav-link" href="#">Features</a></li>
                <li><a className="nav-item nav-link" href="#">Pricing</a></li>
                <li><a className="nav-item nav-link disabled" href="#" tabIndex={-1} aria-disabled="true"></a></li>
            </ul>
        </div>
    </nav>
  )
}


