$(document).ready(function () {

    //variables

    const vehicleType = "VEHICLE_TYPE";
    const BASE_URL = "http://127.0.0.1:5500/";

    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    const cars = ["/img/car_light.png", "/img/car.png"]

    let isLightOn = false;


   
    //car movement
    $(document).on('keypress', function (e) {
        console.log(localStorage.getItem(vehicleType));
        console.log(e.which);
        if (e.which == 100) {

            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');

        }
    });
    //car light on and off
    $(document).on('keypress', function (e) {

        console.log(e.which);
        if (e.which == 32) {

            if (isLightOn) {
                isLightOn = false;
                $img.attr('src', cars[0]);
            } else {
                isLightOn = true;
                $img.attr('src', cars[1]);
            }


        }
    });


});