export default function getStatesFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : {};
}
