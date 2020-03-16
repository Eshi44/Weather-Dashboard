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
                console.log(data);
               

 

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

        

    });




});