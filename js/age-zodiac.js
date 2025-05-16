// Set max date to today for both date inputs
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('birthdate').max = today;
    document.getElementById('compare-date').max = today;
});

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const compareDateInput = document.getElementById('compare-date').value;
    const compareDate = compareDateInput ? new Date(compareDateInput) : new Date();
    
    if (isNaN(birthdate.getTime())) {
        alert('Please enter a valid birth date');
        return;
    }
    
    if (birthdate > compareDate) {
        alert('Birth date cannot be in the future');
        return;
    }
    
    const age = getAge(birthdate, compareDate);
    const zodiac = getZodiac(birthdate);
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <div class="age-result">
            <h3>Your Age:</h3>
            <p><strong>${age.years} years, ${age.months} months, and ${age.days} days</strong></p>
            <p>Born on ${birthdate.toDateString()}</p>
            <p>Calculated on ${compareDate.toDateString()}</p>
        </div>
    `;
    
    // Show zodiac information
    document.getElementById('zodiac-sign').textContent = zodiac.name;
    document.getElementById('zodiac-symbol').textContent = zodiac.symbol;
    document.getElementById('zodiac-dates').textContent = `${zodiac.startDate} to ${zodiac.endDate}`;
    document.getElementById('zodiac-element').textContent = zodiac.element;
    document.getElementById('zodiac-planet').textContent = zodiac.planet;
    document.getElementById('zodiac-description').innerHTML = `<p>${zodiac.description}</p>`;
    
    // Add traits
    const traitsContainer = document.getElementById('zodiac-traits');
    traitsContainer.innerHTML = '';
    zodiac.traits.forEach(trait => {
        traitsContainer.innerHTML += `<span class="trait-pill">${trait}</span>`;
    });
    
    document.getElementById('zodiac-info').style.display = 'block';
}

function getAge(birthdate, compareDate) {
    let years = compareDate.getFullYear() - birthdate.getFullYear();
    let months = compareDate.getMonth() - birthdate.getMonth();
    let days = compareDate.getDate() - birthdate.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(compareDate.getFullYear(), compareDate.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

function getZodiac(birthdate) {
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    
    const zodiacSigns = [
        { 
            name: 'Aries', 
            symbol: '♈', 
            startDate: 'March 21', 
            endDate: 'April 19', 
            element: 'Fire', 
            planet: 'Mars',
            description: 'Aries are bold and ambitious, diving headfirst into challenges. They\'re passionate and confident leaders who love to initiate projects.',
            traits: ['Courageous', 'Energetic', 'Confident', 'Determined', 'Impulsive']
        },
        { 
            name: 'Taurus', 
            symbol: '♉', 
            startDate: 'April 20', 
            endDate: 'May 20', 
            element: 'Earth', 
            planet: 'Venus',
            description: 'Taurus is known for being reliable, practical, and sensual. They enjoy the finer things in life and value stability and comfort.',
            traits: ['Patient', 'Reliable', 'Warmhearted', 'Loving', 'Stubborn']
        },
        // Add all 12 zodiac signs with similar detail
        { 
            name: 'Gemini', 
            symbol: '♊', 
            startDate: 'May 21', 
            endDate: 'June 20', 
            element: 'Air', 
            planet: 'Mercury',
            description: 'Gemini are expressive, quick-witted, and sociable. They\'re intellectually curious and love learning and sharing ideas.',
            traits: ['Adaptable', 'Outgoing', 'Intelligent', 'Playful', 'Inconsistent']
        },
        { 
            name: 'Cancer', 
            symbol: '♋', 
            startDate: 'June 21', 
            endDate: 'July 22', 
            element: 'Water', 
            planet: 'Moon',
            description: 'Cancer is deeply intuitive and sentimental. They value home and family above all else and are extremely loyal.',
            traits: ['Emotional', 'Loving', 'Intuitive', 'Protective', 'Moody']
        },
        { 
            name: 'Leo', 
            symbol: '♌', 
            startDate: 'July 23', 
            endDate: 'August 22', 
            element: 'Fire', 
            planet: 'Sun',
            description: 'Leos are dramatic, creative, and self-assured. They love to be in the spotlight and have generous hearts.',
            traits: ['Generous', 'Warmhearted', 'Creative', 'Enthusiastic', 'Arrogant']
        },
        { 
            name: 'Virgo', 
            symbol: '♍', 
            startDate: 'August 23', 
            endDate: 'September 22', 
            element: 'Earth', 
            planet: 'Mercury',
            description: 'Virgos are analytical, kind, and hardworking. They have a keen eye for detail and strive for perfection.',
            traits: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Overcritical']
        },
        { 
            name: 'Libra', 
            symbol: '♎', 
            startDate: 'September 23', 
            endDate: 'October 22', 
            element: 'Air', 
            planet: 'Venus',
            description: 'Libras are diplomatic, gracious, and fair-minded. They value harmony and balance in all aspects of life.',
            traits: ['Diplomatic', 'Gracious', 'Fair-minded', 'Social', 'Indecisive']
        },
        { 
            name: 'Scorpio', 
            symbol: '♏', 
            startDate: 'October 23', 
            endDate: 'November 21', 
            element: 'Water', 
            planet: 'Pluto',
            description: 'Scorpios are passionate, resourceful, and brave. They have intense emotions and a strong will.',
            traits: ['Passionate', 'Stubborn', 'Resourceful', 'Brave', 'Jealous']
        },
        { 
            name: 'Sagittarius', 
            symbol: '♐', 
            startDate: 'November 22', 
            endDate: 'December 21', 
            element: 'Fire', 
            planet: 'Jupiter',
            description: 'Sagittarius are optimistic, funny, and generous. They love freedom, travel, and philosophical discussions.',
            traits: ['Extroverted', 'Optimistic', 'Funny', 'Generous', 'Tactless']
        },
        { 
            name: 'Capricorn', 
            symbol: '♑', 
            startDate: 'December 22', 
            endDate: 'January 19', 
            element: 'Earth', 
            planet: 'Saturn',
            description: 'Capricorns are disciplined, responsible, and patient. They value tradition and are excellent at long-term planning.',
            traits: ['Serious', 'Independent', 'Disciplined', 'Tenacious', 'Pessimistic']
        },
        { 
            name: 'Aquarius', 
            symbol: '♒', 
            startDate: 'January 20', 
            endDate: 'February 18', 
            element: 'Air', 
            planet: 'Uranus',
            description: 'Aquarius are original, uncompromising, and humanitarian. They march to the beat of their own drum.',
            traits: ['Deep', 'Imaginative', 'Original', 'Uncompromising', 'Aloof']
        },
        { 
            name: 'Pisces', 
            symbol: '♓', 
            startDate: 'February 19', 
            endDate: 'March 20', 
            element: 'Water', 
            planet: 'Neptune',
            description: 'Pisces are wise, artistic, and empathetic. They are deeply intuitive and often very spiritual.',
            traits: ['Affectionate', 'Empathetic', 'Wise', 'Artistic', 'Escapist']
        }
    ];
    
    // Special cases for signs that span December/January
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10]; // Aquarius
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9]; // Capricorn
    
    // Other signs
    const signDates = [
        [3, 21, 0], [4, 20, 1], [5, 21, 2], [6, 21, 3],
        [7, 23, 4], [8, 23, 5], [9, 23, 6], [10, 23, 7],
        [11, 22, 8], [12, 22, 9], [1, 20, 10], [2, 19, 11]
    ];
    
    for (let i = 0; i < signDates.length; i++) {
        const [m, d, signIndex] = signDates[i];
        if ((month === m && day >= d) || (month === m + 1 && day < signDates[(i + 1) % 12][1])) {
            return zodiacSigns[signIndex];
        }
    }
    
    return zodiacSigns[0]; // Default (shouldn't happen)
}