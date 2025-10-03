import { useState } from "react";
import logo from "../../medias/logo.svg";
import { NavLink, useLocation } from "react-router";
import PropTypes from "prop-types";

import "./Sidebar.css";
export function Sidebar({assetNumber}) {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };
    const getSidebarText = ()=> {
        switch (location.pathname) {
            case "/":
                return `Explorez plus de ${assetNumber} arbres uniques, des tropiques aux terres polaires. Chaque modèle évoque un univers, chaque feuillage une histoire. Laissez-vous inspirer et composez votre propre forêt.`;
            case "/faq":
                return "Besoin d’aide ? Retrouvez ici les réponses aux questions les plus fréquentes à propos du catalogue et de ses fonctionnalités.";
            case "/changelogs":
                return "Consultez l’historique des mises à jour et découvrez les dernières nouveautés ajoutées au catalogue.";
            default:
                return "";
        }
    }


    return(
        <div className={`sidebar${isOpen ? " open" : ""}`}>
            <div className="logo" onClick={toggleSidebar} >
                <img src={logo} alt="Logo"/>
            </div>
            <div className="sidebar_content">
                <div className="text">
                    {getSidebarText()} 
                </div>
                <ul>
                    <li className='active'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
                            Catalogue
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/changelogs" className={({ isActive }) => (isActive ? "active" : "")}>
                            Changelogs
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Sidebar.propTypes = {

}