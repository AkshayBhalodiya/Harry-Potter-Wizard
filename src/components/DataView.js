import React from 'react';

const DataView = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <li key={index} className="recipe-item">
              <h3>{recipe.name || '-'}</h3>
              <p><span className="font-bold">Difficulty:</span> {recipe.difficulty || '-'}</p>
              <p><span className="font-bold">Ingredients:</span> {recipe.ingredients.map(i => i.name).join(', ') || '-'}</p>
              <p><span className="font-bold">Inventor:</span> {recipe.inventorFirstName} {recipe.inventorLastName || '-'}</p>
              <p><span className="font-bold">Manufacturer:</span> {recipe.manufacturer || '-'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="nodata">No data found</p>
      )}
    </div>
  );
};

export default DataView;
