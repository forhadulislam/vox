import logo from '../../../logo.svg';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Vox</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Features</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link disabled" href="#" tabIndex={-1} aria-disabled="true"></a>
        </div>
        </div>
    </nav>
  )
}


