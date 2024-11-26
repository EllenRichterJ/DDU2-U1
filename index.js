// Recommended: All functions declared here
function createCityBox(cityName) {
    const cityBoxDiv = document.createElement("div");
    cityBoxDiv.classList.add("cityBox");
    cityBoxDiv.textContent = cityName;
    document.getElementById("cities").append(cityBoxDiv);
}

function displayAllCities() {
    const citiesContainer = document.getElementById("cities");
    citiesContainer.innerHTML = '';  // Tömmer containern innan nya städer läggs till

    for (let i = 0; i < cities.length; i++) {
        const cityBoxDiv = document.createElement("div");
        cityBoxDiv.classList.add("cityBox");
        cityBoxDiv.textContent = cities[i].name;
        citiesContainer.appendChild(cityBoxDiv);
    }
} displayAllCities();

function findCity() {
    const cityFinder = prompt("Vilken stad söker du?");
    let cityFound = false;

    const cityDivs = document.querySelectorAll(".cityBox");

    cityDivs.forEach(cityDiv => cityDiv.classList.remove("target"));

    for (let i = 0; i < cities.length; i++) {
        if (cityFinder.toLowerCase() === cities[i].name.toLowerCase()) {
            document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
            cityDivs[i].classList.add("target");
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

