const getItem = key => localStorage.getItem(key);

const setItem = (key, value) => {
  if (key && value) localStorage.setItem(key, value);
};

const removeItem = key => localStorage.removeItem(key);

const clearAllLS = () => localStorage.clear();

export { getItem, setItem, removeItem, clearAllLS };
