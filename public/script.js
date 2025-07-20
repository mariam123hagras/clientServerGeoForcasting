

let form = document.getElementById('form1');
const errorF = document.getElementById('error');
const locationF = document.getElementById('location');
const forecastF = document.getElementById('forecast');
const longitude = document.getElementById('longitude');
const latitude = document.getElementById('latitude');

// const outputElements = [locationF, forecastF, longitude, latitude, errorF];
const outputElements=[locationF,forecastF,longitude,latitude,errorF];

//Common styling function
function styleOutput(el, text) {
    el.innerText = text;
    el.style.display = "block";
    el.style.color = "white";
    el.style.backgroundColor = "#9e2222ff";
    el.style.padding = "15px 5px";
    el.style.fontSize = "1.2em";
    el.style.margin = "10px 0";
    el.style.borderRadius = "10px";
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    weatherFun();
    form.reset();
});

let weatherFun = async () => {
    // Clear all outputs before fetching new data
    outputElements.forEach(el => {
        el.innerText = '';
        el.style.display = "none";
    });

    try {
        const address = document.getElementById('address').value;
        const res = await fetch('http://localhost:3000/weather?address=' + address);
        const data = await res.json();
        console.log(data);

        if (data.error) {
            styleOutput(errorF, data.error);
        } else {
            styleOutput(locationF, "Country is " + data.location);
            styleOutput(forecastF, "Forecast is " + data.forecast);
            styleOutput(longitude, "Longitude is " + data.longitude);
            styleOutput(latitude, "Latitude is " + data.latitude);
        }

    } catch (e) {
        console.log(e);
        styleOutput(errorF, "An unexpected error occurred");
    }
}
