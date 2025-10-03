import PropTypes from 'prop-types'

import logo from "../../medias/logo.svg" 
import './Grid.css'
import { Grid_card } from '../../components/grid_card/Grid_card'
export function Grid({ assets, onCardClick }) {
    if(assets.length === 0) return (
            <div className="empty_container">

                <img src={logo} alt="Logo" className="notfound-logo" />
                
                <h2>Aucun arbre trouvé</h2>
                <p>
                    Vous avez quitté la forêt... aucun arbre en vue !<br />
                    Ajustez vos filtres pour retrouver votre chemin.
                </p>
            
            </div>
    )
    else 
    return(
        <>
            <div className="grid">
                {assets.map(asset => (
                    <Grid_card cardId={asset.id} cardName={asset.name} key={asset.id} onClick={() => onCardClick(asset)}/>
                ))}
            </div>
        </>
    )
}

Grid.propTypes = {

}