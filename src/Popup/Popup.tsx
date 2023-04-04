import React, { useState, useEffect, useRef } from 'react';
import './Popup.css';

interface PopupProps {
  buttonTitle: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Popup: React.FC<PopupProps> = ({ buttonTitle, options, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const renderOptions = (): JSX.Element[] => {
    return options.map((option) => (
      <div key={option} className="option" onClick={() => handleOptionClick(option)}>
        {option}
      </div>
    ));
  };

  return (
    <div ref={menuRef} className="popup-menu">
      <button className="button" onClick={handleButtonClick}>
        {buttonTitle}
      </button>
      {isMenuOpen && <div className="options-menu">{renderOptions()}</div>}
    </div>
  );
};

export default Popup;