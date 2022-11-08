import React, { Component } from 'react' ;
import { Link } from 'react-router-dom' ;
// import '../App.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark topnavbar" >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:"white"}} >NewsLand</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll" >
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                {/* <li className="nav-item">
                  <Link className="nav-link "  to="/">General</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/business" style={{color:"white"}} >Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" style={{color:"white"}} >Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" style={{color:"white"}} >Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" style={{color:"white"}} >Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" style={{color:"white"}} >Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" style={{color:"white"}} >Technology</Link>
                </li>
                
              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

