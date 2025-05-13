// Utility Functions
function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return isNaN(value) ? 0 : value; // Return 0 if input is not a number
}

function setResult(id, text) {
  document.getElementById(id).textContent = text;
}

// Conversion Functions
function convertCMtoInches() {
  const cm = getInputValue("cmInput");
  const inches = (cm / 2.54).toFixed(2);
  setResult("inchResult", `${inches} inches`);
}

function convertKGtoPounds() {
  const kg = getInputValue("kgInput");
  const pounds = (kg * 2.20462).toFixed(2);
  setResult("poundResult", `${pounds} lbs`);
}

function convertCelsiusToFahrenheit() {
  const celsius = getInputValue("celInput");
  const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
  setResult("fahrenheitResult", `${fahrenheit} °F`);
}

// Health Calculators
function calculateBMI() {
  const weight = getInputValue("weight");
  const height = getInputValue("height") / 100;
  const bmi = (weight / (height * height)).toFixed(1);
  
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';
  
  setResult("bmiResult", `BMI: ${bmi} (${category})`);
}

function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  if (isNaN(dob.getTime())) {
    setResult("ageResult", "Please enter a valid date");
    return;
  }
  
  const ageInMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  setResult("ageResult", `Age: ${age} years`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add input event listeners for real-time conversion
  document.getElementById('cmInput')?.addEventListener('input', convertCMtoInches);
  document.getElementById('kgInput')?.addEventListener('input', convertKGtoPounds);
  document.getElementById('celInput')?.addEventListener('input', convertCelsiusToFahrenheit);
  document.getElementById('weight')?.addEventListener('input', calculateBMI);
  document.getElementById('height')?.addEventListener('input', calculateBMI);
  document.getElementById('dob')?.addEventListener('change', calculateAge);
});