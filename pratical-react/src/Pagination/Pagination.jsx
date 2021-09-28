import React from "react";

function Pagination({ loading, totalPosts, postPerPage, paginate }) {
  let numberOfPage = [];
  const totalPage = totalPosts / postPerPage;
  for (let i = 1; i <= totalPage; i++) {
    numberOfPage.push(i);
  }

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <ul className="pagination m-4">
          {numberOfPage.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className="page-item"
            >
              <a href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Pagination;
