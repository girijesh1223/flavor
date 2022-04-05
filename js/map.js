function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(27.1767, 78.0081), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: true,
		mapTypeControl: false,
		zoomControl: true,
		streetViewControl: false,
		}
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(27.1767, 78.0081) //change the coordinates
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);