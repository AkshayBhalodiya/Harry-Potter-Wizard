import React from 'react';

const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <nav className="pagination">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)} className="page-link">
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
