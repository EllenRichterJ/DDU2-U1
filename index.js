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
}
displayAllCities();

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

