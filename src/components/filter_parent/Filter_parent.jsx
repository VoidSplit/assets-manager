import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function Filter_parent({ label, options, onChange, defaultSelected = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);

  const toggleOpen = () => setIsOpen((s) => !s);

  const handleSelect = (value) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  // notifie le parent APRES rendu (et uniquement quand selected change)
  useEffect(() => {
    onChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]); // intentionally depend only on selected

  return (
    <div className={`filter_container ${isOpen ? "open" : ""}`}>
      <div className="display" onClick={toggleOpen}>
        <p>{label}</p>
        <span>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>

      {isOpen && (
        <div className="content">
          <ul>
            {options.map((opt) => {
              const checked = selected.includes(opt.value);
              return (
                <li key={opt.value} onClick={() => handleSelect(opt.value)} className={checked ? "selected" : ""}>
                  <span>{opt.label}</span>
                  <div className={`check ${checked ? "checked" : ""}`} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

Filter_parent.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  defaultSelected: PropTypes.array,
};