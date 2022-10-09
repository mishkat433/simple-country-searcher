
const loadData = (search) => {
    if (search === "all") {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => displayData(data))
        document.getElementById("loading").style.display = "block";
    }
    else {
        fetch(`https://restcountries.com/v3.1/name/${search}`)
            .then(res => res.json())
            .then(data => displayData(data))
        document.getElementById("loading").style.display = "block";
    }
}

const searchCountry = () => {
    const inpValue = document.getElementById("inputText");
    loadData(inpValue.value);
    inpValue.value = ``;
}

const displayData = data => {
    document.getElementById("loading").style.display = "none";
    if (data.length === undefined) {
        loadData("all");
    }
    else {
        const country = document.getElementById("country");
        country.innerText = "";
        data.forEach(data => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
            <img class="flag" src= ${data.flags.png}>
            <h2>Region: ${data.region} </h2>
            <h2>Country Name: ${data.name.common}</h2>
            <h3>Capital : ${data.capital} </h3>
            <p>Time Zone : ${data.timezones[0]} </p>
            <p>StartOf Week : ${data.startOfWeek} </p>
            <p>Population : ${data.population} </p>
            `
            country.appendChild(div);
        });
    }

}
loadData("all")