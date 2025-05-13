function convertCMtoInches() {
  const cm = document.getElementById("cmInput").value;
  const inches = (cm / 2.54).toFixed(2);
  document.getElementById("inchResult").textContent = `${inches} inches`;
}

function convertKGtoPounds() {
  const kg = document.getElementById("kgInput").value;
  const pounds = (kg * 2.20462).toFixed(2);
  document.getElementById("poundResult").textContent = `${pounds} lbs`;
}

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmiResult").textContent = `Your BMI is ${bmi}`;
}

function convertCelsiusToFahrenheit() {
  const celsius = document.getElementById("celInput").value;
  const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
  document.getElementById("fahrenheitResult").textContent = `${fahrenheit} °F`;
}

function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  document.getElementById("ageResult").textContent = `You are ${age} years old.`;
}
