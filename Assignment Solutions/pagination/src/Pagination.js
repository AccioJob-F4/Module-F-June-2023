import React, { useState } from "react";

const itemsPerPage = 10; // Number of items to display per page

const PaginationExample = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display on the current page
  const currentItems = data.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Display the items */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Display pagination controls */}
      <div>
        {/* Previous page button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          )
        )}

        {/* 1. Array.from({ length: totalPages }, (_, i) => i + 1) creates an array with a length specified by the totalPages variable. The second argument is a mapping function that assigns a value to each element of the array. In this case, it assigns a sequence of numbers starting from 1 to each element.
          2. .map((pageNumber) => ...) is used to iterate over each element of the array and return a new array. It executes the provided function for each element and creates a new array with the results.
          3. Inside the .map() callback function, a JSX code block is defined to create a <button> element for each page number.
          4. The key={pageNumber} attribute is set to provide a unique identifier for each button element. It helps React efficiently update and manage the elements when the array changes.
          5. The onClick={() => handlePageChange(pageNumber)} attribute specifies the function handlePageChange to be called when the button is clicked. It passes the corresponding pageNumber as an argument to the function.
          6. The disabled={currentPage === pageNumber} attribute is set to disable the button if the currentPage matches the pageNumber. It ensures that the button representing the current page is disabled to indicate the current page to the user.
          7. The text inside the <button> element is {pageNumber}, which displays the page number as the button label. */}

        {/* Next page button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
