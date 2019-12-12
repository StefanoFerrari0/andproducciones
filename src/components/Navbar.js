import React, { Component } from "react";
import Logo from '../images/logo.webp';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default class Navbar extends Component
{
    state={
        isOpen: false
    }

    handleToggle = () =>
    {
        this.setState({isOpen:!this.state.isOpen})
    }

    render()
    {
        return (<nav className="navbar">
        <div className="nav-center">
            <Link to="/">
              <img id="logo" src={Logo} alt="AndProducciones"/>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/eventos/">Eventos</Link>
            </li>
            <li>
              <Link to="/artistas/">Artistas</Link>
            </li>
            <li>
              <Link to="/cultura/">Cultura</Link>
            </li>
            <li>
              <Link to="/contacto/">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}