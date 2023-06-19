import React, { useState, useEffect } from "react";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!isLoading && items.length < totalItems) {
        loadMoreItems();
      }
    }
  };

  const loadMoreItems = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=40`
    );
    const data = await response.json();

    setItems((prevItems) => [...prevItems, ...data.data]);
    setPage((prevPage) => prevPage + 1);
    setTotalItems(data.totalItems);
    setIsLoading(false);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;

// ====================================================================================================================================

// EXPLANATION

// 1. Importing Dependencies:
//    ```javascript
//    import React, { useState, useEffect } from "react";
//    ```
//    - The code imports the necessary dependencies from the React library: `useState` and `useEffect`.

// 2. Initializing Component:
//    ```javascript
//    const InfiniteScrollComponent = () => {
//      // Component logic goes here
//    };
//    ```
//    - This creates a functional component named `InfiniteScrollComponent`.

// 3. Setting State:
//    ```javascript
//    const [items, setItems] = useState([]);
//    const [page, setPage] = useState(1);
//    const [isLoading, setIsLoading] = useState(false);
//    const [totalItems, setTotalItems] = useState(0);
//    ```
//    - The code initializes several state variables using the `useState` hook:
//      - `items`: Stores the currently loaded items.
//      - `page`: Tracks the current page number for pagination.
//      - `isLoading`: Indicates whether new items are being loaded.
//      - `totalItems`: Keeps track of the total number of items available (for conditional loading).

// 4. Mounting and Unmounting Effects:
//    ```javascript
//    useEffect(() => {
//      loadMoreItems();
//    }, []);

//    useEffect(() => {
//      window.addEventListener("scroll", handleScroll);

//      return () => {
//        window.removeEventListener("scroll", handleScroll);
//      };
//    }, []);
//    ```
//    - The first `useEffect` hook is used to load initial data when the component mounts. It calls the `loadMoreItems` function, which fetches the initial set of items.
//    - The second `useEffect` hook attaches a scroll event listener to the window and handles its cleanup when the component unmounts.

// 5. Scroll Event Handling:
//    ```javascript
//    const handleScroll = () => {
//      if (
//        window.innerHeight + document.documentElement.scrollTop ===
//        document.documentElement.offsetHeight
//      ) {
//        if (!isLoading && items.length < totalItems) {
//          loadMoreItems();
//        }
//      }
//    };
//    ```
//    - The `handleScroll` function is called whenever the user scrolls.
//    - It checks if the user has reached the bottom of the page by comparing the sum of the window's inner height and the scroll distance with the total height of the document.
//    - If the conditions are met (not currently loading and there are more items to load), the `loadMoreItems` function is called.

// 6. Loading More Items:
//    ```javascript
//    const loadMoreItems = async () => {
//      setIsLoading(true);

//      await new Promise((resolve) => setTimeout(resolve, 1000));

//      const response = await fetch(
//        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=40`
//      );
//      const data = await response.json();

//      setItems((prevItems) => [...prevItems, ...data.data]);
//      setPage((prevPage) => prevPage + 1);
//      setTotalItems(data.totalItems);
//      setIsLoading(false);
//    };
//    ```
//    - The `loadMoreItems` function is an asynchronous function responsible for loading more items.
//    - It sets `isLoading` to `true` to indicate that it's currently loading items.
//    - It simulates an API request delay using `setTimeout` for one second.
//    - It then makes an API request to fetch more items, using the `page` state to determine the page number and a fixed size of 40 items per page.
//    - The fetched data is appended to the existing `items` state using the spread operator

// .
//    - The `page` state is incremented to prepare for the next page load.
//    - The `totalItems` state is updated with the total number of items available from the API response.
//    - Finally, `isLoading` is set back to `false` to indicate that the loading is complete.

// 7. Rendering:
//    ```javascript
//    return (
//      <div>
//        <ul>
//          {items.map((item) => (
//            <li key={item.id}>{item.name}</li>
//          ))}
//        </ul>
//        {isLoading && <p>Loading...</p>}
//      </div>
//    );
//    ```
//    - The component's render function returns JSX that displays the loaded items in an unordered list.
//    - Each item's `id` is used as the `key` prop to ensure efficient rendering.
//    - The `isLoading` state is used to conditionally render a "Loading..." message.

// 8. Exporting Component:
//    ```javascript
//    export default InfiniteScrollComponent;
//    ```
//    - The component is exported as the default export, making it available for use in other files.
