

//define city variable
var city;
//add ready method
$(document).ready(function() {
  var savedCity = localStorage.getItem("city");
  console.log("savedCity" + savedCity);
  //if city is not null, pull from local storage and run setWeather function
  if (savedCity != null) {
    city = savedCity;
    // city=JSON.parse(city);
    // console.log("This is the reload" +location.reload(true));
    setWeather();
    // $("#city").text(city);
    // console.log(city);
  }

  //click funtion for allowing city info to populate
  $("#btn").click(function() {
    // console.log(savedCity + " in button");
    // console.log("is saved city true? " + savedCity != null);
    // console.log("is saved city found in button?");

    //variable condition to pull from storage if not null and reload page to clear previous city value
    var savedCity = localStorage.getItem("city");
    if (savedCity != null) {
      city = $("#city").val();
      localStorage.setItem("city", JSON.stringify(city));
      location.reload(true);
    }
    city = $("#city").val();
    localStorage.setItem("city", JSON.stringify(city));
    city =  localStorage.getItem("city");
    console.log(city);
    console.log("setting weather first time");
    setWeather();
  });
});
//set weather function will be called in the event listener
function setWeather() {
  //change city from string to object
  city = JSON.parse(city);

  // console.log("setting weather to city " + city);

  var unlist = $(".inputCityName")
    .append("<ul>")
    .addClass("list-group list-group-flush");
  unlist.append($("<li>")).addClass("list-group-item");
  $(".list-group-item").append(city);

  // console.log(list);
  //ajax for current day weather
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather/?q=" +
      city +
      "&units=imperial" +
      "&APIkey=d1817ee7c3ae109bbf6ea614ec59a4cb" +
      "&lat={lat}&lon={lon}",
    method: "GET"
  }).then(function(data) {
    //console.log(data);

    var date = moment().format("L");
    var cardTitle = $("#title");
    var iconurl =
      "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    cardTitle.append(city + " (" + date + ")");
    $("#wicon").attr("src", iconurl);

    var temp = $("#temp");
    temp.append(" " + data.main.temp + "°F");

    //console.log(data.main.temp);

    var humidity = $("#humidity");
    humidity.append(" " + data.main.humidity + "%");

    var wind = $("#wind");
    wind.append(" " + data.wind.speed + "MPH");
  });
  //ajax for five day forecast
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast/?q=" +
      city +
      "&units=imperial" +
      "&APIkey=d1817ee7c3ae109bbf6ea614ec59a4cb" +
      "&cnt=5",
    method: "GET"
  }).then(function(data) {
    console.log(data);
    //moment.js variable dates for next five days
    var dateOne = moment()
      .add(1, "days")
      .format("L");
    var dateTwo = moment()
      .add(2, "days")
      .format("L");
    var dateThree = moment()
      .add(3, "days")
      .format("L");
    var dateFour = moment()
      .add(4, "days")
      .format("L");
    var dateFive = moment()
      .add(5, "days")
      .format("L");

    //variable array of dates
    var fiveDayWeekDates = [dateOne, dateTwo, dateThree, dateFour, dateFive];

    // console.log(fiveDayWeekDates);
    //location dates will append to
    var dateTitle = document.getElementsByClassName("datetitle");
    //for loop for dates
    for (var i = 0; i < fiveDayWeekDates.length; i++) {
      dateTitle[i].innerHTML = fiveDayWeekDates[i];
      //  console.log(fiveDayWeekDates.length);
    }
    //temp array for five day forecast
    var array = [
      data.list[0].main.temp,
      data.list[1].main.temp,
      data.list[2].main.temp,
      data.list[3].main.temp,
      data.list[4].main.temp
    ];

    //console.log(array);

    var temperatureForecast = $(".tempFive");
    //for floop for temp
    for (var i = 0; i < array.length; i++) {
      temperatureForecast[i].append("Temp:" + array[i] + "°F");
      // console.log(array.length);
      //console.log(temperatureForecast);
    }
    //humidity array for five day forecast
    var humidArray = [
      data.list[0].main.humidity,
      data.list[1].main.humidity,
      data.list[2].main.humidity,
      data.list[3].main.humidity,
      data.list[4].main.humidity
    ];

    var humidityForecast = $(".humidFive");
    //for loop for humidity
    for (var i = 0; i < humidArray.length; i++) {
      humidityForecast[i].append("Humidity:" + humidArray[i] + "%");
    }
    //added weather icons to five day forecast
    var weatherIcon1 = $("#weatherIcon1");
    var iconurl1 =
      "https://openweathermap.org/img/w/" +
      data.list[0].weather[0].icon +
      ".png";
    weatherIcon1.append();
    $("#wicon1").attr("src", iconurl1);

    var weatherIcon2 = $("#weatherIcon2");
    var iconurl2 =
      "https://openweathermap.org/img/w/" +
      data.list[1].weather[0].icon +
      ".png";
    weatherIcon2.append();
    $("#wicon2").attr("src", iconurl2);

    var weatherIcon3 = $("#weatherIcon3");
    var iconurl3 =
      "https://openweathermap.org/img/w/" +
      data.list[2].weather[0].icon +
      ".png";
    weatherIcon3.append();
    $("#wicon3").attr("src", iconurl3);

    var weatherIcon4 = $("#weatherIcon4");
    var iconurl4 =
      "https://openweathermap.org/img/w/" +
      data.list[3].weather[0].icon +
      ".png";
    weatherIcon4.append();
    $("#wicon4").attr("src", iconurl4);

    var weatherIcon5 = $("#weatherIcon5");
    var iconurl5 =
      "https://openweathermap.org/img/w/" +
      data.list[4].weather[0].icon +
      ".png";
    weatherIcon5.append();
    $("#wicon5").attr("src", iconurl5);
  });
}
