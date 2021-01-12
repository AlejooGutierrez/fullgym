import React from 'react'
import { Link} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="col-9 col-sm-9 col-md-6 col-lg-6" to="/">
                <img src="./images/captura.png" width="50%" height="60px" alt="fullgym logo" />
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">INICIO <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to="/noticias">NOTICIAS</Link>
                        <Link className="nav-link" to="/contactenos">CONTACTENOS</Link>
                        <Link className="nav-link disabled" tabindex="-1" aria-disabled="true">NO LO PIENSES MAS!</Link>
                    </div>
                </div>
        </nav>
    )
}
