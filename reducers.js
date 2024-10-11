// Original array of rockets
var rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe(ESA)', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }
];

// Calculate the TOTAL number of launches
var totalLaunches = rockets.reduce(function(accumulator, rocket) {
    return accumulator + rocket.launches;
}, 0);

// Calculate the AVERAGE number of launches
var averageLaunches = totalLaunches / rockets.length;

// Print the average number of launches
console.log('Average number of launches:', averageLaunches);
