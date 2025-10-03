import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import './Modal.css'
export function Modal({asset, onClose}) {
    if (!asset) return null;
    return(
        <div className="modal">
            <div className="modal_box">
                <div className="modal_top">
                    <div className="modal_close" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div className="modal_content">
                    <div className="modal_image">
                        <img src={`/src/assets/images/original/${asset.id}.png`} alt={`Image representant un ${asset.name}`} />
                    </div>
                    <div className="modal_infos">
                        <div className="top_infos">
                            <div className="name">{asset.name}</div>
                            <div className="id">#{asset.id}</div>
                        </div>
                        <div className="description">
                            {asset.description}
                        </div>
                        <div className="tag_list">
                            <div className="label">Tags</div>
                            <div className="list">
                                {asset.tags?.map((tag, index) => (
                                  <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="box">
                            <div className="coords">
                                <div className="label">Coordonnées</div>
                                <div className="table">
                                    <div className="col">
                                        <div className="outline">x</div>
                                        <div className="text">{asset.coords.x}</div>
                                    </div>
                                    <div className="col">
                                        <div className="outline">y</div>
                                        <div className="text">{asset.coords.y}</div>
                                    </div>
                                    <div className="col">
                                        <div className="outline">z</div>
                                        <div className="text">{asset.coords.z}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="size">
                                <div className="label">Taille</div>
                                <div className="table">
                                    <div className="col">
                                        <div className="outline">longueur</div>
                                        <div className="text">{asset.size.length}</div>
                                    </div>
                                    <div className="col">
                                        <div className="outline">largeur</div>
                                        <div className="text">{asset.size.width}</div>
                                    </div>
                                    <div className="col">
                                        <div className="outline">hauteur</div>
                                        <div className="text">{asset.size.height}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
  asset: PropTypes.object,
  onClose: PropTypes.func,
};