// Create a function named groceriesList that returns a map of groceries
// with the following items (name, quantity)

export default function groceriesList() {
  const listMap = new Map();
  listMap.set('Apples', 10);
  listMap.set('Tomatoes', 10);
  listMap.set('Pasta', 1);
  listMap.set('Rice', 1);
  listMap.set('Banana', 5);
  return listMap;
}
