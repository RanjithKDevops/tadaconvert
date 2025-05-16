function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('Please fill in all fields with valid numbers');
        return;
    }
    
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    const maintenanceCalories = Math.round(bmr * activity);
    const mildWeightLoss = maintenanceCalories - 250;
    const weightLoss = maintenanceCalories - 500;
    const extremeWeightLoss = maintenanceCalories - 1000;
    const weightGain = maintenanceCalories + 500;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="calorie-result">
            <h3>Your Daily Calorie Needs:</h3>
            <div class="calorie-box">
                <p><strong>Maintenance:</strong> ${maintenanceCalories} calories/day</p>
                <p>To maintain your current weight</p>
            </div>
            <div class="calorie-box">
                <p><strong>Mild weight loss:</strong> ${mildWeightLoss} calories/day</p>
                <p>0.25 kg/week loss</p>
            </div>
            <div class="calorie-box">
                <p><strong>Weight loss:</strong> ${weightLoss} calories/day</p>
                <p>0.5 kg/week loss</p>
            </div>
            <div class="calorie-box">
                <p><strong>Extreme weight loss:</strong> ${extremeWeightLoss} calories/day</p>
                <p>1 kg/week loss (not recommended)</p>
            </div>
            <div class="calorie-box">
                <p><strong>Weight gain:</strong> ${weightGain} calories/day</p>
                <p>0.5 kg/week gain</p>
            </div>
        </div>
    `;
}