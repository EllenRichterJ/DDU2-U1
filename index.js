// Recommended: All functions declared here
function createCityBox(cityName) {
    const cityBoxDiv = document.createElement("div");
    cityBoxDiv.classList.add("cityBox");
    cityBoxDiv.textContent = cityName;
    document.getElementById("cities").append(cityBoxDiv);
}

function displayAllCities() {
    for (let i = 0; i < cities.length; i++) {
        createCityBox(cities[i].name);
    }
} displayAllCities();

function findCity() {
    const cityFinder = prompt("Vilken stad söker du?");
    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cityFinder.toLowerCase() === cities[i].name.toLowerCase()) {
            document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
            cityFound = true;
            break;
        }
    }

    if (!cityFound) {
        document.querySelector("h2").textContent = `${cityFinder} finns inte i databasen.`;
    }
} findCity();

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

