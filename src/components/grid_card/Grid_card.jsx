import PropTypes from 'prop-types'

import './Grid_card.css'
export function Grid_card({cardId, cardName, onClick, isNew}) {
    return(
        <div className="grid_card" onClick={onClick}>
            {isNew && <div className='new_indicator'>Nouveau</div>}
            <img fetchpriority="high" src={`../../src/assets/images/avif/optimized/${cardId}.avif`} alt={`Image representant un ${cardName}`} />
            <div className="infos">
                <div className="name">{cardName}</div>
                <span className="id">#{cardId}</span>
            </div>
        </div>
    )
}

Grid_card.propTypes = {

}