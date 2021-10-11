
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var city = document.getElementById("city-input").value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTreedaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

    for (let i=0;i<4;i++)
    {
      // On récupère l'information principal
      const main = data.list[i].weather[0].main;
      const description = data.list[i].weather[0].description;
      const temp = data.list[i].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

      // Modifier le DOM

      switch(i){

      case 0:
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container-today').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      break;

      case 1:
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container-tomorrow').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;

      break;

      case 2:
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container-aftertomorrow').innerHTML = icon;
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp}°C`;

      break;

      case 3:
      document.getElementById('afteraftertomorrow-forecast-main').innerHTML = main;
      document.getElementById('afteraftertomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container-afteraftertomorrow').innerHTML = icon;
      document.getElementById('afteraftertomorrow-forecast-temp').innerHTML = `${temp}°C`;

      break;
      
      }
    }
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
