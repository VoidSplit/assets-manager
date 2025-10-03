import "./App.css";
import { useState, useEffect, useMemo } from "react";
import { Filters_bar } from "./layouts/filters_bar/Filters_bar";
import { Grid } from "./layouts/grid/Grid";
import { Sidebar } from "./layouts/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";
import { Modal } from "./components/modal/Modal";

function App() {
  const [filters, setFilters] = useState({
    rarity: [],
    color: [],
    size: [],
    climate: [],
    search: "",
  });

  const [assets, setAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const itemsPerPage = 20; // ✅ 5 cards par page

  // 📦 Chargement des assets JSON
  useEffect(() => {
    const loadAssets = async () => {
      const modules = import.meta.glob("/src/assets/data/*.json");
      const promises = Object.values(modules).map((fn) => fn());
      const results = await Promise.all(promises);
      setAssets(results.map((r) => r.default));
    };
    loadAssets();
  }, []);

  // 🔎 Application des filtres
  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      // 🔍 Search text
      const search = filters.search.trim().toLowerCase();
      if (search) {
        const matchText =
          String(asset.name).toLowerCase().includes(search) ||
          String(asset.id).toLowerCase().includes(search);
        if (!matchText) return false;
      }

      // 🎯 Filtrage par catégories
      const categories = ["rarity", "color", "size", "climate"];
      for (const cat of categories) {
        const selectedValues = filters[cat];
        if (selectedValues.length > 0) {
          // ✅ on vérifie dans asset[cat] directement si c’est une string
          const match = selectedValues.some((value) => asset.tags.includes(value.toLowerCase().trim()));
          if (!match) return false;
        }
      }

      return true;
    });
  }, [assets, filters]);

  // 📄 Pagination : découpe le tableau filtré
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAssets = filteredAssets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 🧭 Changement de page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCardClick = (asset) => {
    setSelectedAsset(asset); // ouvre la modale avec cet asset
  };

  const handleCloseModal = () => {
    setSelectedAsset(null); // ferme la modale
  };

  // 🔁 Reset à la page 1 quand les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);
  
  return (
    <div id="app">
      <Modal asset={selectedAsset} onClose={handleCloseModal}/>
      <div className="sidebar_parent">
        <Sidebar assetNumber={assets.length}/>
      </div>

      <div className="content_parent">
        <div className="grid_manager_parent">
          <div className="grid_parent">
            <Grid assets={paginatedAssets} onCardClick={handleCardClick} />
            <Footer 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="filters_parent">
            <Filters_bar onFiltersChange={setFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;