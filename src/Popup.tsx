import React, { useState } from 'react';

interface PopupMenuProps {
  buttonTitle: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const PopupMenu: React.FC<PopupMenuProps> = ({ buttonTitle, options, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsMenuOpen(false);
  };

  const renderOptions = (): JSX.Element[] => {
    return options.map((option) => (
      <div key={option} onClick={() => handleOptionClick(option)}>
        {option}
      </div>
    ));
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{buttonTitle}</button>
      {isMenuOpen && <div>{renderOptions()}</div>}
    </div>
  );
};

export default PopupMenu;