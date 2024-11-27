function createCityBox(cityName) {
    const cityBoxDiv = document.createElement("div");
    cityBoxDiv.classList.add("cityBox");
    cityBoxDiv.textContent = cityName;
    document.getElementById("cities").append(cityBoxDiv);
}

function displayAllCities() {
    const citiesContainer = document.getElementById("cities");
    citiesContainer.innerHTML = '';

    for (let i = 0; i < cities.length; i++) {
        createCityBox(cities[i].name);
    }
}
displayAllCities();

function findCity() {
    const cityFinder = prompt("Vilken stad söker du?");
    let cityFound = false;

    const cityDivs = document.querySelectorAll(".cityBox");

    cityDivs.forEach(cityDiv => {
        cityDiv.classList.remove("target", "furthest", "closest");
    });

    for (let i = 0; i < cities.length; i++) {
        if (cityFinder === cities[i].name) {
            document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
            cityDivs[i].classList.add("target");
            cityFound = true;

            document.title = cities[i].name;

            break;
        }
    }

    if (!cityFound) {
        document.querySelector("h2").textContent = `${cityFinder} finns inte i databasen.`;

        document.title = "Not Found";
    }

    findNearestAndFarthestCity(cityFinder);
}
findCity();

function findNearestAndFarthestCity(cityFinder) {
    let minDistance = Infinity;
    let closestCityIndex = -1;
    let maxDistance = 0;
    let farthestCityIndex = -1;

    for (let i = 0; i < distances.length; i++) {
        if (cityFinder === cities[distances[i].city1].name || cityFinder === cities[distances[i].city2].name) {
            let otherCity = (cityFinder === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;

            if (distances[i].distance < minDistance) {
                minDistance = distances[i].distance;
                closestCityIndex = otherCity;
            }

            if (distances[i].distance > maxDistance) {
                maxDistance = distances[i].distance;
                farthestCityIndex = otherCity;
            }
        }
    }

    if (closestCityIndex !== -1) {
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[closestCityIndex].classList.add("closest");
        let divied = minDistance / 10;
        cityDivs[closestCityIndex].textContent = `${cities[closestCityIndex].name} ligger ${divied} mil bort`;
        document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;
    }

    if (farthestCityIndex !== -1) {
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[farthestCityIndex].classList.add("furthest");
        let divied = maxDistance / 10;
        cityDivs[farthestCityIndex].textContent = `${cities[farthestCityIndex].name} ligger ${divied} mil bort`;
        document.getElementById("furthest").textContent = `${cities[farthestCityIndex].name}`;
    }
}

function createDistanceTable() {
    const tableContainer = document.getElementById("table");
    tableContainer.innerHTML = '';
    tableContainer.style.display = "grid";

    const numberOfCities = 39;

    tableContainer.style.gridTemplateColumns = `repeat(${numberOfCities + 1}, auto)`;
    tableContainer.style.gridTemplateRows = `repeat(${numberOfCities + 1}, auto)`;

    const emptyHeader = document.createElement("div");
    emptyHeader.classList.add("cell", "head_column");
    emptyHeader.textContent = "";
    tableContainer.appendChild(emptyHeader);

    for (let i = 0; i < numberOfCities; i++) {
        const cityHeader = document.createElement("div");
        cityHeader.classList.add("cell", "head_column");
        cityHeader.textContent = i;
        tableContainer.appendChild(cityHeader);
    }

    for (let row = 0; row < numberOfCities; row++) {
        const rowHeader = document.createElement("div");
        rowHeader.classList.add("cell", "head_row");
        rowHeader.textContent = `${row}-${cities[row].name}`;
        tableContainer.appendChild(rowHeader);

        if (row % 2 === 0) {
            rowHeader.classList.add("even_row");
        }

        for (let col = 0; col < numberOfCities; col++) {
            const distanceCell = document.createElement("div");
            distanceCell.classList.add("cell");

            if (row % 2 === 0) {
                distanceCell.classList.add("even_row");
            }

            const isEvenCol = col % 2 === 0;

            if (isEvenCol) {
                distanceCell.style.backgroundColor = "#ffe6e2";
            }

            if (row === col) {
                distanceCell.textContent = " ";
            } else {
                const distance = distances.find(
                    (d) => (d.city1 === row && d.city2 === col) || (d.city1 === col && d.city2 === row)
                );
                distanceCell.textContent = distance ? distance.distance / 10 : "";
            }

            tableContainer.appendChild(distanceCell);
        }
    }
}
createDistanceTable();