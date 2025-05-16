// Show/hide hip input based on gender
document.querySelectorAll('input[name="bf-gender"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('hip-input').style.display = 
            this.value === 'female' ? 'block' : 'none';
    });
});

function calculateBodyFat() {
    const gender = document.querySelector('input[name="bf-gender"]:checked').value;
    const neck = parseFloat(document.getElementById('neck').value);
    const waist = parseFloat(document.getElementById('waist').value);
    let hips = 0;
    
    if (gender === 'female') {
        hips = parseFloat(document.getElementById('hips').value);
        if (isNaN(hips)) {
            alert('Please enter your hip measurement');
            return;
        }
    }
    
    if (isNaN(neck) || isNaN(waist)) {
        alert('Please enter all required measurements');
        return;
    }
    
    let bodyFat;
    if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(neck)) - 450;
    } else {
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hips - neck) + 0.22100 * Math.log10(neck)) - 450;
    }
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="bodyfat-result">
            <h3>Your Body Fat Percentage: <strong>${bodyFat.toFixed(1)}%</strong></h3>
            <p>Based on the U.S. Navy method</p>
        </div>
    `;
}