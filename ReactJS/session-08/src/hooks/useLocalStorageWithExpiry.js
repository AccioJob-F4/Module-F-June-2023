import { useState, useEffect } from "react";

const useLocalStorageWithExpiry = (key, defaultValue, expireInMinutes) => {
  const validateKey = () => {
    const item = window.localStorage.getItem(key);

    if (item) {
      const parsedItem = JSON.parse(item);
      if (parsedItem.expiry && Date.now() > parsedItem.expiry) {
        window.localStorage.removeItem(key);
        return defaultValue;
      }
      return parsedItem.value;
    }

    return defaultValue;
  };

  const [value, setValue] = useState(validateKey());

  useEffect(() => {
    const expiryTime = Date.now() + expireInMinutes * 60 * 1000;

    const item = { value, expiry: expiryTime };

    window.localStorage.setItem(key, JSON.stringify(item));

    setTimeout(() => {
      validateKey();
    }, expireInMinutes * 60 * 1000);
  }, [key, value, expireInMinutes]);

  return [value, setValue];
};

export default useLocalStorageWithExpiry;
