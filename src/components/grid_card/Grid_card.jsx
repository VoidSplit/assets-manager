import PropTypes from 'prop-types'

import './Grid_card.css'
export function Grid_card({cardId, cardName, onClick}) {
    return(
        <div className="grid_card" onClick={onClick}>
            <img src={`https://voidsplit.github.io/assets-manager/src/assets/images/original/${cardId}.png`} alt={`Image representant un ${cardName}`} />
            <div className="infos">
                <div className="name">{cardName}</div>
                <span className="id">#{cardId}</span>
            </div>
        </div>
    )
}

Grid_card.propTypes = {

}