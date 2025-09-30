/*
Complete the function so that it returns the following:
80 or above → "Wear shorts and a t-shirt."
60–79 → "Wear jeans and a light jacket."
40–59 → "Wear a sweater and pants."
Below 40 → "Wear a heavy coat, scarf, and boots."
*/

const outfitPicker = (temp) => {
  if (temp >= 80) {
    return "Shorts & T-Shirt";
  } else if (temp >= 79) {
    return "Jeans & Jacket";
  } else if (temp >= 59) {
    return "Sweater & Pants";
  } else if (temp >= 39) {
    return "Coat, Scarf, & Boots"
  }
};

//Test your function below
let result = outfitPicker(79)
console.log(result)