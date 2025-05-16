function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Please enter valid weight and height');
        return;
    }
    
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');
    
    let category, color;
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db'; // blue
    } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#2ecc71'; // green
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12'; // orange
    } else {
        category = 'Obese';
        color = '#e74c3c'; // red
    }
    
    resultElement.innerHTML = `
        <div class="bmi-result" style="border-left: 5px solid ${color}">
            <h3>Your BMI: <strong>${bmi.toFixed(1)}</strong></h3>
            <p>Category: <strong style="color: ${color}">${category}</strong></p>
            <p>Healthy weight range for your height: <strong>${(18.5 * height * height).toFixed(1)}kg - ${(24.9 * height * height).toFixed(1)}kg</strong></p>
        </div>
    `;
}