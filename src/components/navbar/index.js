import React from "react";
import '../../bootstrap.min.css';
import './index.css';
import {ReactComponent as DigestoLogo} from '../../assets/logo-home-digesto.svg';
import $ from 'jquery';

/**
 * Responsible for create navbar component.
 */
export const Navbar = (props) => {
    const {onCurrent, current} = props;

    const handleChange = (number1, number2) => {
        $(function() {
            $('#nav-link-'+number1).removeClass('active');
            $('#nav-link-'+number2).addClass('active');
        });
        onCurrent(number2);
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <DigestoLogo className="App-logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <div id={'nav-link-'+0} value={0} className="nav-link active" onClick={()=>handleChange(current, 0)}>Geral</div>
                        </li>
                        <li className="nav-item">
                        <div id={'nav-link-'+1} value={1} className="nav-link disabled" onClick={()=>handleChange(current, 1)}>Envolvidos</div>
                        </li>
                        <li className="nav-item">
                        <div id={'nav-link-'+2} value={2} className="nav-link disabled" onClick={()=>handleChange(current, 2)}>Relacionados</div>
                        </li>
                        <li className="nav-item">
                        <div id={'nav-link-'+3} value={3} className="nav-link disabled" onClick={()=>handleChange(current, 3)}>Anexos</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
