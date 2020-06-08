$(document).ready(function () {

    //variables

    const vehicleType = "VEHICLE_TYPE";
    const BASE_URL = "http://127.0.0.1:5500/";
    const sceneType = "SCENE_TYPE";


    $surface = $('.surface');
    $night = $('.night')
    $car = $('.car');
    $img = $('.car img');
    $vehicleImage = $('.vehicle_image');
    const cars = ["/img/car_light.png", "/img/car.png"]

    let isLightOn = false;

    //set background

    let scene = localStorage.getItem(sceneType);

    if (scene == 1) {
        $($night).toggleClass('setBackground_1');
    } else if (scene == 2) {
        $($night).toggleClass('setBackground_2');
    } else {
        $($night).toggleClass('setBackground_3');
    }


    //set vehicle

    let vehicle = localStorage.getItem(vehicleType);

    if (vehicle == "bike") {
        $($car).toggleClass('setBottom_bike');
        $($vehicleImage).toggleClass('setDimen')
        $img.attr('src', '/img/bike.png');

    } else if (vehicle == "car") {
        $($car).toggleClass('setBottom_car');
        $($vehicleImage).toggleClass('setDimen')
        $img.attr('src', '/img/sports_car.png');
    } else {
        $($car).toggleClass('setBottom_van');
        $($vehicleImage).toggleClass('setDimen_van')
        $img.attr('src', '/img/car.png');

    }


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