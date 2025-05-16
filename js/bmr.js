function calculateBMR() {
    const age = parseInt(document.getElementById('bmr-age').value);
    const gender = document.querySelector('input[name="bmr-gender"]:checked').value;
    const weight = parseFloat(document.getElementById('bmr-weight').value);
    const height = parseFloat(document.getElementById('bmr-height').value);
    
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
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="bmr-result">
            <h3>Your Basal Metabolic Rate: <strong>${Math.round(bmr)} calories/day</strong></h3>
            <p>This is how many calories your body needs at complete rest.</p>
        </div>
    `;
}