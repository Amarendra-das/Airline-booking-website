document.addEventListener('DOMContentLoaded', function() {
    const flightForm = document.getElementById('flightForm');
    const resultsContainer = document.getElementById('results');

    flightForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const departureDate = document.getElementById('departureDate').value;

        
        const searchResults = [
            { flightNumber: 'Air India', origin: origin, destination: destination, departureTime: '09:00', arrivalTime: '12:00', price: '$200' },
            { flightNumber: 'Indigo', origin: origin, destination: destination, departureTime: '12:00', arrivalTime: '15:00', price: '$250' }
        ];

    
        displayResults(searchResults);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No flights found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = `Flight ${result.flightNumber} from ${result.origin} to ${result.destination}, departing at ${result.departureTime} and arriving at ${result.arrivalTime}. Price: ${result.price}`;
            ul.appendChild(li);
        });

        resultsContainer.appendChild(ul);
    }
});
