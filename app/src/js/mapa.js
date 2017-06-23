function miMapa() {
	//Mapa 01
	var centro01 = new google.maps.LatLng(19.005363,-98.204833);
	var contenedor01 = document.getElementById("googleMap01");
	var mapaProp01 = {
	center: centro01,
	zoom:20,
	};
	var map01=new google.maps.Map(contenedor01,mapaProp01);

	//Mapa 02
	var centro02 = new google.maps.LatLng(19.005363,-98.204833);
	var contenedor02 = document.getElementById("googleMap02");
	var mapaProp02 = {
	center: centro02,
	zoom:20,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	};
	var map02=new google.maps.Map(contenedor02,mapaProp02);
	var marker01 = new google.maps.Marker({position: centro02});
	marker01.setMap(map02);
}
