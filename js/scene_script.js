
$(document).ready(function () {


    const sceneType = "SCENE_TYPE";
    const BASE_URL = "http://127.0.0.1:5500/";

    //selecting corresponding scene
    $(".scene_1").click(function (e) {

        console.log(e);
        localStorage.setItem(sceneType, "4");
        window.location = BASE_URL + "scene.html"
    });

    $(".scene_2").click(function (e) {

        console.log(e);
        localStorage.setItem(sceneType, "2");
    });

    $(".scene_3").click(function (e) {

        console.log(e);
        localStorage.setItem(sceneType, "3");
    });

    $(".scene_4").click(function (e) {

        console.log(e);
        localStorage.setItem(sceneType, "1");
    });

});