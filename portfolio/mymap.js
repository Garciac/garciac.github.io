var map
var infowindow


function createMarker(lat, lon, content) {
    var latLng = new google.maps.LatLng(lat, lon)

    // this may be used for a custom marker
    var customIcon = {
        url: "images/cam.png",
        scaledSize: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: customIcon
    });


    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent("<div class='content'>" + content + "</div>");
        infowindow.open(map, marker);
    })

}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.1331232,
            lng: -118.2036809
        },
        zoom: 10
    })

    infowindow = new google.maps.InfoWindow({
        content: "placeholder"
    })
// Pawnee City Hall
    createMarker(34.1477051, -118.143652, "Pawnee City Hall </br> <img id='imgpc' src='http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/1.PawneeCityHall.jpg'> </br>The Workplace of the Parks and </br> Rec Gang." )
    
//Pawnee Library Department
    createMarker(34.148567, -118.144622, "Pawnee Library Department </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/2.PawneeLibraryDepartment.jpg'> </br> Workplace of Tammy Swanson.")
// Ann Perkin's House
    createMarker(34.173783, -118.439213, "Ann Perkin's House </br> <img src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/4.AnnPerkinsHouse.jpg'> </br> The residence where Ann Perkins lived </br> before moving to Michigan.")
// Leslie Knope's House
    createMarker(34.186372, -118.124216, "Leslie Knope's House </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/5.LesliesHouse.jpg'> </br> The residence where Leslie </br> Knope lived before  marrying </br> Ben Wyatt.")
// JJ's Diner 
    createMarker(34.171141, -118.448310, "JJ's Diner (interior) </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/6.JJsDiner.jpg'> </br> Leslie Knope's favorite </br> restaurant to get waffles.")
// Pawnee Zoo
    createMarker(34.1338058, -118.2893075, "Pawnee Zoo </br> <img id='imgpc' src= 'https://vignette.wikia.nocookie.net/parksandrecreation/images/6/61/S02E01.png/revision/latest/scale-to-width-down/350?cb=20160307115921'> </br> Pawnee's local zoo and also </br> where Leslie married two male </br> Penguins.")
// Rent-a-Swag
    createMarker(34.144789, -118.394597, "Rent-A-Swag  </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/9.Rent-A-Swag.jpg'> </br> Tom Haverford's 1st successful </br> business that rented clothes to teens.")
//Tom's Bistro
    createMarker(34.097821, -118.319247, "Tom's Bistro </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/10.TomsBistro.jpg'> </br> Tom Haverford's 2nd successful </br> business.")
// Pawnee Hospital
    createMarker(34.156034, -118.328728, "Pawnee Saint Joseph Hospital </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/13.ProvidenceSt.JosephMedicalCenter.jpg'> </br> Pawnee's local Hospital and also </br> where Ann Perkin's used to work </br> as a nurse before moving to </br>Michigan.")
// Jurrasic Fork 
    createMarker(34.045294, -118.252871, "Jurassic Fork </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/14.JurassicFork.jpg'> </br> Indiana's popular dinosaur- </br> themed restaurant.")
//The Quiet Corn
    createMarker(34.162772, -118.143459, "The Quiet Corn </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/15.TheQuietCorn.jpg'> </br> A local bed and breakfast.")
// April and Andy's house
    createMarker(34.146527, -118.410105, "April and Andy’s House </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/17.AprilandAndysHouse.jpg'> </br> The former residence of April </br> and Andy before moving </br> during Season 7.")
// Pawnee Police Station
    createMarker(34.118053, -118.187669, "Pawnee Police Station </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/19.PawneePoliceStation.jpg'> </br> The place where Tammy 'II' and </br> Ron spend the night and where </br> Leslie Knope's ex-boyfriend </br> Dave Sanderson used to work </br> before moving to San Diego.")
// Charles Mulligan's Steakhouse
    createMarker(34.189071, -118.320313, "Charles Mulligan’s Steakhouse</br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/20.CharlesMulligansSteakhouse.jpg'> </br> Ron Swanson's favorite restaurant </br> that was later shut down by the </br> health department.")
// Turnbill Mansion
    createMarker(34.133313, -118.168287, "Turnbill Mansion </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/21.TurnbillMansion.jpg'> </br> One of Pawnee's most beloved </br> historical sites that Leslie </br> fought to save.")
// The Snakehole Lounge
    createMarker(34.101068, -118.329362, "The Snakehole Lounge </br> <img id='imgpc' src= 'http://cdn.lamag.com/wp-content/uploads/sites/9/2015/03/16.SnakeholeLounge.jpg'> </br> Pawnee's popular night club and </br> also where Tom met bartender </br> Lucy.")
}
