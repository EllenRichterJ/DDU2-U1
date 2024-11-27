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

            document.title = cities[i].name;

            break;
        }
    }

    if (!cityFound) {
        document.querySelector("h2").textContent = `${cityFinder} finns inte i databasen.`;

        document.title = "Not Found";
    }

    // Hitta och markera den närmaste och längst bort staden
    findNearestAndFarthestCity(cityFinder);
}
findCity();

function findNearestAndFarthestCity(cityFinder) {
    let minDistance = Infinity;
    let closestCityIndex = -1;
    let maxDistance = 0;
    let farthestCityIndex = -1;

    // Loopa genom alla avstånd
    for (let i = 0; i < distances.length; i++) {
        // Hitta avståndet till den angivna staden
        if (cityFinder === cities[distances[i].city1].name || cityFinder === cities[distances[i].city2].name) {
            let otherCity = (cityFinder === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;

            // Kolla om denna stad är närmare
            if (distances[i].distance < minDistance) {
                minDistance = distances[i].distance;
                closestCityIndex = otherCity;
            }

            // Kolla om denna stad är längre bort
            if (distances[i].distance > maxDistance) {
                maxDistance = distances[i].distance;
                farthestCityIndex = otherCity;
            }
        }
    }

    // Markera den närmaste staden
    if (closestCityIndex !== -1) {
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[closestCityIndex].classList.add("closest");
        let divied = minDistance / 10; // Omvandla avståndet till mil (om nödvändigt)
        cityDivs[closestCityIndex].textContent = `${cities[closestCityIndex].name} ${divied} mil bort`;
        document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;
    }

    // Markera den längst bort staden
    if (farthestCityIndex !== -1) {
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[farthestCityIndex].classList.add("furthest");
        let divied = maxDistance / 10; // Omvandla avståndet till mil (om nödvändigt)
        cityDivs[farthestCityIndex].textContent = `${cities[farthestCityIndex].name} ${divied} mil bort`;
        document.getElementById("furthest").textContent = `${cities[farthestCityIndex].name}`;
    }
}

        const toCell = document.createElement("td");
        toCell.textContent = toCity;
function createDistanceTable() {
    const tableContainer = document.getElementById("table");
    tableContainer.innerHTML = ''; // Rensa tidigare innehåll i tabellcontainern
    tableContainer.style.display = "grid";

    const numberOfCities = 39;

    tableContainer.style.gridTemplateColumns = `repeat(${numberOfCities + 1}, auto)`; // Plus 1 för rubrik
    tableContainer.style.gridTemplateRows = `repeat(${numberOfCities + 1}, auto)`;

    // Skapa rubrik för kolumn 0 (övre vänstra hörnet)
    const emptyHeader = document.createElement("div");
    emptyHeader.classList.add("cell", "head_column");
    emptyHeader.textContent = "";
    tableContainer.appendChild(emptyHeader);

    // Skapa rubrikraden med stadsnummer
    for (let i = 0; i < numberOfCities; i++) {
        const cityHeader = document.createElement("div");
        cityHeader.classList.add("cell", "head_column");
        cityHeader.textContent = i;
        tableContainer.appendChild(cityHeader);
    }

    // Fyll i resten av tabellen med avståndsdata
    for (let row = 0; row < numberOfCities; row++) {
        const rowHeader = document.createElement("div");
        rowHeader.classList.add("cell", "head_row");
        rowHeader.textContent = `${row}-${cities[row].name}`;
        tableContainer.appendChild(rowHeader);

        for (let col = 0; col < numberOfCities; col++) {
            const distanceCell = document.createElement("div");
            distanceCell.classList.add("cell");

            // Bestäm om kolumnen är jämn eller udda
            const isEvenCol = col % 2 === 0;

            // Om kolumnen är jämn, ge cellen en bakgrundsfärg
            if (isEvenCol) {
                distanceCell.style.backgroundColor = "#ffe6e2"; // Eller vilken färg du vill
            }

            if (row === col) {
                distanceCell.textContent = " "; // Avstånd till sig själv
            } else {
                const distance = distances.find(
                    (d) => (d.city1 === row && d.city2 === col) || (d.city1 === col && d.city2 === row)
                );
                distanceCell.textContent = distance ? distance.distance : ""; // Fyll i avståndet eller lämna tomt
            }

            tableContainer.appendChild(distanceCell);
        }
    }
}
createDistanceTable();

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

