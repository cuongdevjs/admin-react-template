export function getItem(key) {
  return localStorage.getItem(key);
}

export function saveItem(key, value) {
  if (key && value) localStorage.saveItem(key, value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function clearAllLS() {
  localStorage.clear();
}
