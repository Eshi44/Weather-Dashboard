//console.log("Hello World");
//use bootstrap relative link
//create a nav bar
//create a container
//create a row with a fairly large height
//add two col(col-4 and col-8)
//first col has 2 divs - a search for city button 
//second col has a div card with title and 4 other divs
//then add another div with title and 5 small cards with padding

//add ready method
$(document).ready(function() {

   

//clikc funtion for allowing city info to populate
    $('#btn').click(function() {

            
        var city = $("#city").val();


        //console.log(city);

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather/?q=' + city +"&units=imperial" +
            "&APIkey=d1817ee7c3ae109bbf6ea614ec59a4cb" + "&lat={lat}&lon={lon}",
            method: "GET",
         }).then(function(data) {
                //console.log(data);
               

 

                var date = moment().format('L');
                var cardTitle = $("#title");
                var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                cardTitle.append(city +" ("+ date +")");
                $('#wicon').attr('src', iconurl);

                var temp = $("#temp");
                temp.append(" " + data.main.temp + "°F");

                //console.log(data.main.temp);

                var humidity = $("#humidity");
                humidity.append(" " + data.main.humidity + "%");

                var wind = $("#wind");
                wind.append(" " + data.wind.speed + "MPH");

            });
            
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/forecast/?q=' + city +"&units=imperial" +
                "&APIkey=d1817ee7c3ae109bbf6ea614ec59a4cb" + "&cnt=5",
                method: "GET",
             }).then(function(data) {
                    console.log(data);
                    var dateOne = moment().add(1, "days").format('L');
                    var dateTwo = moment().add(2, "days").format('L');
                    var dateThree = moment().add(3, "days").format('L');
                    var dateFour = moment().add(4, "days").format('L');
                    var dateFive = moment().add(5, "days").format('L');

                   var fiveDayWeekDates = [dateOne,dateTwo,dateThree,dateFour,dateFive ];

                  // console.log(fiveDayWeekDates);

                   var dateTitle = document.getElementsByClassName("datetitle");
                
                   for (var i=0; i<fiveDayWeekDates.length; i++) {
                      dateTitle[i].innerHTML=fiveDayWeekDates[i];
                    //  console.log(fiveDayWeekDates.length);
                   }



                   var array = [data.list[0].main.temp, data.list[1].main.temp, data.list[2].main.temp, 
                   data.list[3].main.temp, data.list[4].main.temp];

                   //console.log(array);
                   
                   var temperatureForecast = $(".tempFive");
              
               for (var i=0; i<array.length; i++) {
                  temperatureForecast[i].append("Temp:" + array[i] + "°F");
                 // console.log(array.length);
                  //console.log(temperatureForecast);


               }

                var humidArray = [data.list[0].main.humidity, data.list[1].main.humidity, data.list[2].main.humidity, 
                data.list[3].main.humidity, data.list[4].main.humidity];

                var humidityForecast = $(".humidFive");

                for (var i=0; i<humidArray.length; i++) {
                    humidityForecast[i].append("Humidity:" + humidArray[i] + "%");
                }


                    var weatherIcon1 = $("#weatherIcon1");
                    var iconurl1 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
                    weatherIcon1.append();
                    $('#wicon1').attr('src', iconurl1);


                    var weatherIcon2 = $("#weatherIcon2");
                    var iconurl2 = "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png";
                    weatherIcon2.append();
                    $('#wicon2').attr('src', iconurl2);


                    var weatherIcon3 = $("#weatherIcon3");
                    var iconurl3 = "http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png";
                    weatherIcon3.append();
                    $('#wicon3').attr('src', iconurl3);



                    var weatherIcon4 = $("#weatherIcon4");
                    var iconurl4 = "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png";
                    weatherIcon4.append();
                    $('#wicon4').attr('src', iconurl4);

                    var weatherIcon5 = $("#weatherIcon5");
                    var iconurl5 = "http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png";
                    weatherIcon5.append();
                    $('#wicon5').attr('src', iconurl5);


                });
    




    });




});