import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Filter_parent from "../../components/filter_parent/Filter_parent";
import "./Filters_bar.css";

/* datasets hors du composant (statiques) */
const rarityOptions = [
  { label: "Commun", value: "commun" },
  { label: "Peu commun", value: "peu_commun" },
  { label: "Rare", value: "rare" },
  { label: "Exotique", value: "exotique" },
];

const colorOptions = [
  { label: "Blanc", value: "blanc" },
  { label: "Gris clair", value: "gris_clair" },
  { label: "Gris", value: "gris" },
  { label: "Noir", value: "noir" },
  { label: "Marron", value: "marron" },
  { label: "Rouge", value: "rouge" },
  { label: "Orange", value: "orange" },
  { label: "Jaune", value: "jaune" },
  { label: "Vert clair", value: "vert_clair" },
  { label: "Vert", value: "vert" },
  { label: "Cyan", value: "cyan" },
  { label: "Bleu clair", value: "bleu_clair" },
  { label: "Bleu", value: "bleu" },
  { label: "Violet", value: "violet" },
  { label: "Magenta", value: "magenta" },
  { label: "Rose", value: "rose" },
];

const sizeOptions = [
  { label: "Très petit", value: "tres_petit" },
  { label: "Petit", value: "petit" },
  { label: "Moyen", value: "moyen" },
  { label: "Grand", value: "grand" },
  { label: "Très grand", value: "tres_grand" },
];

const climateOptions = [
  { label: "Tempéré", value: "tempere" },
  { label: "Tropical", value: "tropical" },
  { label: "Polaire", value: "polaire" },
  { label: "Désertique", value: "desertique" },
];

const typeOptions = [
  { label: "Normal", value: "normal" },
  { label: "Fantaisie", value: "fantaisie" },
  { label: "Mort", value: "mort" },
];

export function Filters_bar({ onFiltersChange }) {
  const [filters, setFilters] = useState({
    rarity: [],
    color: [],
    size: [],
    climate: [],
    type: [],
    search: "",
  });

  // met à jour une clé de filters et notifie le parent
  const updateFilter = useCallback(
    (key, value) => {
      setFilters((prev) => {
        const updated = { ...prev, [key]: value };
        onFiltersChange?.(updated);
        return updated;
      });
    },
    [onFiltersChange]
  );

  // handlers stables pour passer aux enfants
  const handleRarity = useCallback((vals) => updateFilter("rarity", vals), [updateFilter]);
  const handleColor = useCallback((vals) => updateFilter("color", vals), [updateFilter]);
  const handleSize = useCallback((vals) => updateFilter("size", vals), [updateFilter]);
  const handleClimate = useCallback((vals) => updateFilter("climate", vals), [updateFilter]);
  const handleType = useCallback((vals) => updateFilter("type", vals), [updateFilter]);

  const handleSearchChange = (e) => {
    updateFilter("search", e.target.value || "");
  };

  const [isOpen, setIsOpen] = useState(false); // ✅ état pour toggle le menu

  // 🔁 toggle de la classe open
  const toggleFilters = () => setIsOpen((prev) => !prev);

  return (
    <div className={`filters_bar${isOpen ? " open" : ""}`}>
      <h1>Filtres</h1>
      <div className="filters">
        <div className="search_bar">
          <input
            type="text"
            placeholder="Rechercher par nom ou id..."
            value={filters.search}
            onChange={handleSearchChange}
          />
          <div className="open_menu" onClick={toggleFilters}>Filtres</div>
        </div>

        <div className="filters_list">
          <Filter_parent label="Rareté" options={rarityOptions} defaultSelected={[]} onChange={handleRarity} />
          <Filter_parent label="Couleur" options={colorOptions} defaultSelected={[]} onChange={handleColor} />
          <Filter_parent label="Taille" options={sizeOptions} defaultSelected={[]} onChange={handleSize} />
          <Filter_parent label="Climat" options={climateOptions} defaultSelected={[]} onChange={handleClimate} />
          <Filter_parent label="Type" options={typeOptions} defaultSelected={[]} onChange={handleType} />
        </div>
      </div>
    </div>
  );
}

Filters_bar.propTypes = {
  onFiltersChange: PropTypes.func,
};