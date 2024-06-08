import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import DataView from "./DataView";
import Pagination from "./Pagination";

const MainPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventor: "",
    manufacturer: "",
  });

  useEffect(() => {
    fetchRecipes();
  }, [filters]);

  const fetchRecipes = () => {
    setLoading(true);
    setTimeout(() => {
    const { name, difficulty, ingredient, inventor, manufacturer } = filters;
    let query = "";

    if (name) query += `name=${name}&`;
    if (difficulty) query += `difficulty=${difficulty}&`;
    if (ingredient) query += `ingredient=${ingredient}&`;
    if (inventor) query += `inventor=${inventor}&`;
    if (manufacturer) query += `manufacturer=${manufacturer}&`;
    axios
      .get(`https://wizard-world-api.herokuapp.com/Elixirs?${query}`)
      .then((response) => {
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
      setLoading(false); 
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterSubmit = () => {
    fetchRecipes();
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventor: "",
      manufacturer: "",
    });
    fetchRecipes();
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredRecipes.length / recipesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="sidebar">
      <div className="filter-section">
        <h1>Recipe Filter</h1>
        <Filter
          filters={filters}
          handleInputChange={handleInputChange}
          handleFilterSubmit={handleFilterSubmit}
          handleResetFilters={handleResetFilters}
        />
      </div>

      <div className="data-view">
        <h2>Filtered Recipes</h2>
        {loading && <div className="loader"></div>}
        <DataView recipes={currentRecipes} />
        <Pagination pageNumbers={pageNumbers} paginate={paginate} />
      </div>
    </div>
  );
};

export default MainPage;
