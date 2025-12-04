import React from 'react';
import { Filter } from 'lucide-react';
import Button from '../common/Button';

const ProductFilters = ({ availableOnly, onToggleAvailable }) => {
  return (
    <div className="flex gap-4">
      <Button
        variant={availableOnly ? 'primary' : 'outline'}
        onClick={onToggleAvailable}
        className="flex items-center gap-2"
      >
        <Filter className="w-4 h-4" />
        {availableOnly ? 'Showing Available' : 'Show All'}
      </Button>
    </div>
  );
};

export default ProductFilters;