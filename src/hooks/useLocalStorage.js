import { createContext } from "react";

export const useLocalStorage = () => {
  const get = (key) => {
    const result = localStorage.getItem(key);

    if (result) {
      return JSON.parse(result);
    }

    return null;
  };

  const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return { get, set };
};

export const StorageContext = createContext(null);
