const userInputString = prompt(
    "Please enter the flavors you would like separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  const flavorArray = userInputString.split(",");

function countFlavors (inputArray) {
  const counts = {};
  for (const num of inputArray) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts; 
}

flavorObject = countFlavors(flavorArray);



//   console.log(stringArray);
  console.log(flavorObject);                                               