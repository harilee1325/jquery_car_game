
$(document).ready(function () {


    const vehicleType = "VEHICLE_TYPE";
    const BASE_URL = "http://127.0.0.1:5500/";

    //selecting bike in home page
    $(".bike").click(function (e) {
        
        localStorage.setItem(vehicleType, "bike");
        window.location = BASE_URL + "scene.html"
    });

    //selecting bike in home page
    $(".car").click(function (e) {

        console.log(e);
        localStorage.setItem(vehicleType, "car");
        window.location = BASE_URL + "scene.html"

    });
    $(".van").click(function (e) {

        console.log(e);
        localStorage.setItem(vehicleType, "van");
        window.location = BASE_URL + "scene.html"

    });

});