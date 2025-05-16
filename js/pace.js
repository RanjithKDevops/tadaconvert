function calculatePace() {
    const distance = parseFloat(document.getElementById('distance').value);
    const distanceUnit = document.getElementById('distance-unit').value;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    if (isNaN(distance) || distance <= 0) {
        alert('Please enter a valid distance');
        return;
    }
    
    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert('Please enter a valid time');
        return;
    }
    
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const pacePerKm = totalSeconds / distance;
    const pacePerMile = pacePerKm * 1.60934;
    
    const paceKmMinutes = Math.floor(pacePerKm / 60);
    const paceKmSeconds = Math.round(pacePerKm % 60);
    const paceMiMinutes = Math.floor(pacePerMile / 60);
    const paceMiSeconds = Math.round(pacePerMile % 60);
    
    const speedKmH = distance / (totalSeconds / 3600);
    const speedMph = speedKmH / 1.60934;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="pace-result">
            <h3>Your Pace:</h3>
            <div class="pace-box">
                <p><strong>${paceKmMinutes}:${paceKmSeconds.toString().padStart(2, '0')} min/km</strong></p>
                <p>${speedKmH.toFixed(2)} km/h</p>
            </div>
            <div class="pace-box">
                <p><strong>${paceMiMinutes}:${paceMiSeconds.toString().padStart(2, '0')} min/mi</strong></p>
                <p>${speedMph.toFixed(2)} mph</p>
            </div>
        </div>
    `;
}