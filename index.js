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
        createCityBox(cities[i].name); // Använd den existerande funktionen
    }
}
displayAllCities();

function findCity() {
    const cityFinder = prompt("Vilken stad söker du?");
    let cityFound = false;

    const cityDivs = document.querySelectorAll(".cityBox");

    // Ta bort "target", "furthest", och "closest" klasser från alla tidigare valda städer
    cityDivs.forEach(cityDiv => {
        cityDiv.classList.remove("target", "furthest", "closest");
    });

    for (let i = 0; i < cities.length; i++) {
        if (cityFinder.toLowerCase() === cities[i].name.toLowerCase()) {
            document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
            cityDivs[i].classList.add("target"); // Markera den hittade staden
            cityFound = true;
            break;
        }
    }

    if (!cityFound) {
        document.querySelector("h2").textContent = `${cityFinder} finns inte i databasen.`;
    }

    // Hitta och markera den närmaste och längst bort staden
    findNearestAndFarthestCity(cityFinder);
}
findCity();


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

