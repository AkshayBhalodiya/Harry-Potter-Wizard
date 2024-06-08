import React from 'react';

const Filter = ({ filters, handleInputChange, handleFilterSubmit, handleResetFilters }) => {
  return (
    <div className="">
      <label>
        Name:
        <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
      </label>
      <label>
        Difficulty:
        <select name="difficulty" value={filters.difficulty} onChange={handleInputChange}>
          <option value="">--</option>
          <option value="Unknown">Unknown</option>
          <option value="Advanced">Advanced</option>
          <option value="Moderate">Moderate</option>
          <option value="Beginner">Beginner</option>
          <option value="OrdinaryWizardingLevel">OrdinaryWizardingLevel</option>
          <option value="OneOfAKind">OneOfAKind</option>
        </select>
      </label>
      <label>
        Ingredient:
        <input type="text" name="ingredient" value={filters.ingredient} onChange={handleInputChange} />
      </label>
      <label>
        Inventor Full Name:
        <input type="text" name="inventor" value={filters.inventor} onChange={handleInputChange} />
      </label>
      <label>
        Manufacturer:
        <input type="text" name="manufacturer" value={filters.manufacturer} onChange={handleInputChange} />
      </label>
      <div className="buttons">
        {/* <button onClick={handleFilterSubmit}>Submit Filters</button> */}
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
