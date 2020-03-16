console.log("Hello World");
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
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' +city + "&units=imperial" +
            "&APIkey=d1817ee7c3ae109bbf6ea614ec59a4cb",
            method: "GET",
         }).then(function(data) {
                console.log(data);
                console.log(data.clouds);

                var date = moment().format('L');
                var cardTitle = $(".card-title");
                cardTitle.append(city +" ("+ date +")");


            });

        

    });




});