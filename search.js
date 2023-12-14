import React, { useState } from 'react';

const CustomSearchBar = ({ onCustomSearch }) => {
  const [customSearchType, setCustomSearchType] = useState('customFreeText');

  const handleCustomSearch = () => {
    onCustomSearch(customSearchType, customSearchTerm, customStartDate, customEndDate);
  };

  return (
    <div>
=
    </div>
  );
};

export default CustomSearchBar;
