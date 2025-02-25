import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import ClassSelectionContext from "../../contexts/class-selection.context";

import "./codex-dropdown.styles.scss";

const CodexDropdown = ({ onSelect, toggleClassInfo }) => {
  const { selectedClass } = useContext(ClassSelectionContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option) => {
    switch (option) {
      case "Class Overview":
        toggleDropdown();
        toggleClassInfo();
        break;
      case "Skill List":
        toggleDropdown();
        navigate("/codex/class-skills/");
        break;
      case "Aspect List":
        toggleDropdown();
        navigate("/codex/aspects/");
        break;
      default:
        break;
    }
  };

  return (
    <div className="codex-dropdown-container" ref={dropdownRef}>
      <div className="d4-button codex-dropdown-toggle" onClick={toggleDropdown}>
        Codex
        <span className="dropdown-arrow"></span>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={350}
        classNames="dropdown-menu-animation"
        unmountOnExit
      >
        <div className="codex-dropdown-menu">
          <div className="codex-dropdown-menu-bg-container"></div>
          <div
            className="codex-dropdown-item"
            onClick={() => handleOptionSelect("Class Overview")}
          >
            Class Info
          </div>
          <div
            className="codex-dropdown-item"
            onClick={() => handleOptionSelect("Skill List")}
          >
            Class Skills
          </div>
          <div
            className="codex-dropdown-item"
            onClick={() => handleOptionSelect("Aspect List")}
          >
            Aspects
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default CodexDropdown;
