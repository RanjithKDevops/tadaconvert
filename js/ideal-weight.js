function calculateIdealWeight() {
    const gender = document.querySelector('input[name="iw-gender"]:checked').value;
    const height = parseFloat(document.getElementById('height-iw').value);
    
    if (isNaN(height)) {
        alert('Please enter your height');
        return;
    }
    
    let idealWeight;
    if (gender === 'male') {
        idealWeight = 50 + 0.9 * (height - 152);
    } else {
        idealWeight = 45.5 + 0.9 * (height - 152);
    }
    
    // Calculate range (±10%)
    const lowerRange = idealWeight * 0.9;
    const upperRange = idealWeight * 1.1;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="ideal-weight-result">
            <h3>Your Healthy Weight Range:</h3>
            <div class="weight-range">
                <p><strong>${lowerRange.toFixed(1)}kg - ${upperRange.toFixed(1)}kg</strong></p>
                <p>For a height of ${height}cm (${gender})</p>
            </div>
            <p>This range represents ±10% of the ideal weight calculated by the Devine formula.</p>
        </div>
    `;
}