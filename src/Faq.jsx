import PropTypes from 'prop-types'
import "./Faq.css";
import { Sidebar } from './layouts/sidebar/Sidebar';
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Simple_dropdown from './components/simple_dropdown/Simple_drodown';

export default function Faq() {
  return (
    <div id="faq">
      <div className="sidebar_parent">
        <Sidebar />
      </div>
      <div className="inner">
          <div className="text-box">
            <h1>Foire aux questions</h1>
            <p>Voici les questions les plus fréquemment posées au sujet d'Assets Manager.</p>
          </div>
          <div className="wrapper">
            <Simple_dropdown 
              icon={faBook}
              title={"Comment utiliser les filtres ?"}
              description={<>
                <p>Les filtres se trouvent à droite du catalogue. Vous pouvez :</p>
                <ul>
                  <li>Rechercher un arbre par son ID ou son nom grâce au champ de recherche.</li>
                  <li>Filtrer les arbres par rareté, couleur, taille ou climat.</li>
                </ul>

                <span className='spacing'></span>
                <p><span className="bold underline">Fonctionnement des filtres :</span></p>
                <ul>
                  <li>Si vous sélectionnez plusieurs options <span className="bold">du même type</span>, le catalogue affichera tous les arbres correspondant à <span className="bold">au moins une</span> de                               ces options.</li>
                  <li>Si vous combinez des filtres de <span className="bold">types différents</span>, seuls les arbres correspondant à <span className="bold">au moins une option dans chaque type de filtre</                              span> seront affichés.</li>
                </ul>
                <span className='spacing'></span>
                <p><span className="bold underline">Exemples :</span></p>
                <ul>
                  <li>Filtre rareté : "commun" + "rare" → affichera tous les arbres communs et rares.</li>
                  <li>Filtre rareté : "commun" + "rare" et filtre taille : "grand" → affichera uniquement les arbres communs ou rares qui sont également grands.</li>
                </ul>
              </>}
            />
            <Simple_dropdown 
              icon={faTree}
              title={"Comment proposer un arbre"}
              description={<>
                <p>Pour ajouter un arbre dans le catalogue, certaines informations sont nécessaires :</p>
                <ul>
                  <li><span className="bold">Nom</span> — <span className="bold underline">obligatoire</span>. Chaque arbre doit avoir un nom unique pour être identifié.</li>
                  <li><span className="bold">Description</span> — recommandée. Elle permet d’apporter plus de détails sur l’arbre et ses particularités.</li>
                  <li><span className="bold">Coordonnées</span> — <span className="bold underline">obligatoires</span>. Elles indiquent l’emplacement exact de l’arbre sur la carte.</li>
                </ul>
                <p>Une fois ces informations prêtes, vous pouvez proposer l’ajout de l’arbre sur le <span className="bold">Discord</span>, dans le channel <span className="bold underline">#suggestions</span>, en incluant le tag <span className="bold underline">#ikéarbre</span>.</p>
                <p>Sans ces informations, l’arbre ne pourra pas être ajouté correctement au catalogue.</p>
              </>}
            />
            <Simple_dropdown 
                icon={faHammer}
                title={"Comment utiliser les arbres ?"}
                description={<>
                  <p>Tous les arbres sont visibles à la fois sur le <span className="bold">site</span> (qui sert de catalogue) et directement <span className="bold">en jeu</span> dans la zone dédiée. Vous pouvez vous y promener librement pour explorer les différents arbres et trouver celui qui vous intéresse.</p>
                  <p>Lorsque vous souhaitez utiliser un arbre pour votre projet, il suffit de transmettre son <span className="bold">identifiant</span> (exemple : <span className="bold underline">#0045</span>) à un <span className="bold">administrateur</span>. Celui-ci se chargera ensuite de le <span className="bold">copier-coller</span> à l’endroit souhaité dans votre map.</p>
                </>}
            />
          </div>
      </div>
    </div>
  );
}

Faq.propTypes = {

}