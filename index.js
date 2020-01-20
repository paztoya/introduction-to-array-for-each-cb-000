// Add your doToElementsInArray() function here:
function changeCompletely(elements, index, array)
{
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + `${array[index]}s!!!`;

}
var animals = [ "dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

//logout animals --pretty cool, right?
console.console.log(animals);
// Add your changeCompletely() function here:
