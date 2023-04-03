import React, { useState } from 'react';
import PopupMenu from './Popup';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <PopupMenu buttonTitle="Select an option" options={['Option 1', 'Option 2', 'Option 3']} onSelect={handleSelect} />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default App;
