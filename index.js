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

function createDistanceTable() {
    const tableContainer = document.getElementById("table");
    tableContainer.innerHTML = ''; // Rensa tidigare innehåll i tabellcontainern

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headerCity1 = document.createElement("th");
    headerCity1.textContent = "Från stad";

    const headerCity2 = document.createElement("th");
    headerCity2.textContent = "Till stad";

    const headerDistance = document.createElement("th");
    headerDistance.textContent = "Avstånd (mil)";

    headerRow.append(headerCity1, headerCity2, headerDistance);
    table.appendChild(headerRow);

    distances.forEach(distance => {
        const row = document.createElement("tr"); // Skapar en ny rad för varje distans

        const fromCity = cities[distance.city1].name;
        const toCity = cities[distance.city2].name;
        const dist = distance.distance; // Hämtar själva avståndet

        const fromCell = document.createElement("td");
        fromCell.textContent = fromCity;

        const toCell = document.createElement("td");
        toCell.textContent = toCity;

        const distanceCell = document.createElement("td");
        distanceCell.textContent = dist;

        row.append(fromCell, toCell, distanceCell);
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
} createDistanceTable();

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

