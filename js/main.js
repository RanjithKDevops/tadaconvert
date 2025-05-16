// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize AdSense
document.addEventListener('DOMContentLoaded', function() {
    // Auto ads is already initialized in the head
    // Additional ad-related scripts can go here if needed
});

// Example calculator function (BMI calculator)
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Please enter valid weight and height');
        return;
    }
    
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');
    
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    
    resultElement.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> (${category})`;
}