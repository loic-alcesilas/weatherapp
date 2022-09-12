const APIKEY = "5d627c791c84cff8ecae70dcc2e7e3f9";

/* appel de l'api avec ville en parametre de function */
   function call_api(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = data.main.temp + "°C";
        document.querySelector("#humidity").innerHTML =
          "<i class='fa-regular fa-droplet-percent'></i>" + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
      })
    )
    .catch((err) => console.log('erreur : ' + err));

    }


const city_input = document.getElementById('inputCity')

document.querySelector('form'). addEventListener('submit', function(submit_event) {

submit_event.preventDefault()
call_api(city_input.value)

})

