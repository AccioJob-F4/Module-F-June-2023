import { useEffect, useState } from "react";

const useClickOutside = (ref, callback) => {
  const [clickedOutside, setClickedOutside] = useState(false);

  const handleClickOutside = (event) => {
    // console.log("event.target : ", event.target);
    // console.log("ref.current : ", ref.current);
    setClickedOutside(false);

    if (ref.current && !ref.current.contains(event.target)) {
      setClickedOutside(true);
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);

  return clickedOutside;
};

export default useClickOutside;
