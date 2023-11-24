const textEl = document.getElementById("text")
const temperatureEl = document.getElementById("temperature")
const iconEl = document.getElementById("icon")

function weatherApi(){ 
    const url = "https://api.open-meteo.com/v1/forecast?latitude=40.8028&longitude=29.4307&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&timezone=auto&forecast_days=3"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const temperatureNow = data.current.temperature_2m
            const humidityNow = data.current.relative_humidity_2m
            const precipitationNow = data.current.precipitation
            const weatherCodeNow = data.current.weather_code

            temperatureEl.innerText = Math.round(temperatureNow) + "C°"

            textEl.innerText += "Nem oranı: %" + humidityNow + "\n"
            textEl.innerText += "Yağış oranı: %" + precipitationNow + "\n"

            iconEl.innerHTML = `<img src="./svg/${weatherCodeToIcon(weatherCodeNow)}.svg">`
        })
}

function weatherCodeToIcon(code){

    if (code === 0){return "wi-day-sunny"}
    else if (code === 1){return "wi-day-sunny"}
    else if (code === 2){return "wi-day-cloudy"}
    else if (code === 3){return "wi-cloudy"}
    else if (code === 45){return "wi-fog"}
    else if (code === 48){return "wi-fog"}
    else if (code === 51){return "wi-rain"}
    else if (code === 53){return "wi-rain"}
    else if (code === 55){return "wi-rain"}
    else if (code === 56){return "wi-rain"}
    else if (code === 57){return "wi-rain"}
    else if (code === 61){return "wi-rain"}
    else if (code === 63){return "wi-rain"}
    else if (code === 65){return "wi-rain"}
    else if (code === 66){return "wi-rain"}
    else if (code === 67){return "wi-rain"}
    else if (code === 71){return "wi-snow"}
    else if (code === 73){return "wi-snow"}
    else if (code === 75){return "wi-snow"}
    else if (code === 77){return "wi-sleet"}
    else if (code === 80){return "wi-showers"}
    else if (code === 81){return "wi-showers"}
    else if (code === 82){return "wi-showers"}
    else if (code === 85){return "wi-snow"}
    else if (code === 86){return "wi-snow"}
    else if (code === 95){return "wi-day-thunderstorm"}
    else if (code === 96){return "wi-day-thunderstorm"}
    else if (code === 99){return "wi-day-thunderstorm"}

}

weatherApi()
