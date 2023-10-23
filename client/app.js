var gMap;
function initGMap( ){
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng:10}, zoom:3});

}
function initapplication(){
    console.log("Map Mania lite is starting up!")
}