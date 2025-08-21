const typeSelect = document.getElementById("type");
const inputValue = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const type = typeSelect.value;
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;

  if (type === "temperature") {
    // °C ↔ °F
    converted = `${value} °C = ${(value * 9/5 + 32).toFixed(2)} °F | ${value} °F = ${((value - 32) * 5/9).toFixed(2)} °C`;
  } else if (type === "length") {
    // km ↔ miles
    converted = `${value} km = ${(value * 0.621371).toFixed(2)} miles | ${value} miles = ${(value / 0.621371).toFixed(2)} km`;
  } else if (type === "weight") {
    // kg ↔ lbs
    converted = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs | ${value} lbs = ${(value / 2.20462).toFixed(2)} kg`;
  }

  result.textContent = converted;
});

// allow Enter key to convert
inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertBtn.click();
  }
});
