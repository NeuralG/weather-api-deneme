const textEl = document.getElementById("text")
const temperatureEl = document.getElementById("temperature")
const iconEl = document.getElementById("icon")

function weatherApi(){ 
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.8025&lon=29.4398&appid=eb55c9b3d58a0bf58fd18dfc0ed28035&units=metric&lang=tr"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const temperatureNow = data.main.temp
            const humidityNow = data.main.humidity
            const windNow = data.wind.speed
            const iconCode = data.weather[0].icon

            temperatureEl.innerText = Math.round(temperatureNow) + "C°"

            textEl.innerText += "Nem Oranı: %" + humidityNow + "\n"
            textEl.innerText += "Rüzgar Hızı: " + Math.round(windNow) + " m/s \n"
            textEl.innerHTML += `<p style="font-weight:bold">${(data.weather[0].description).toUpperCase()}</p>`

            iconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png">`
        })
}

weatherApi()
