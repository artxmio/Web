document.getElementById("cityForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cityName").value;
    const population = document.getElementById("population").value;

    const city = {
        name,
        population,
        getInfo() {
            return `${this.name}, население: ${this.population}`;
        }
    };

    const li = document.createElement("li");
    li.textContent = city.getInfo();
    document.getElementById("cityList").appendChild(li);

    this.reset();
});