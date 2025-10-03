import PropTypes from 'prop-types'
import "./NotFound.css";
import { Sidebar } from './layouts/sidebar/Sidebar';
import { useNavigate } from 'react-router';
import logo from "./medias/logo.svg" 

export default function NotFound() {
    const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="notfound-content">
        <img src={logo} alt="Logo" className="notfound-logo" />

        <h1>404</h1>
        <h2>Page introuvable</h2>
        <p>
          Cette page semble s’être perdue dans la forêt.  
          Retournez au catalogue pour continuer votre exploration.
        </p>

        <button onClick={() => navigate("/")} className="back-btn">
          Retour au catalogue
        </button>
      </div>
    </div>
  );
}

NotFound.propTypes = {

}