function miMapa() {
	//Mapa 01
	var centro01 = new google.maps.LatLng(19.005363,-98.204833);
	var contenedor01 = document.getElementById("googleMap01");
	var mapaProp01 = {
	center: centro01,
	zoom:17,
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
	var infowindow = new google.maps.InfoWindow({
		content:"El Queso"
  });
	infowindow.open(map02,marker01);

	//Mapa 03
	//Arrreglo de Lugares
	var lugares = [
      ['FCC', 19.005207, -98.204387],
      ['RECTORIA', 19.002082, -98.201664],
      ['DAE', 18.998440, -98.194782],
      ['BIBLIOTECA CENTRAL', 18.995838, -98.202029],
      ['STU', 19.000845, -98.203046]
    ];

	//Creando un nuevo mapa
	var centro03 = new google.maps.LatLng(19.000378, -98.200484);
	var contenedor03 = document.getElementById("googleMap03");
	var mapaProp03 = {
		center: centro03,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	var map03=new google.maps.Map(contenedor03,mapaProp03);

	//Agregar Marcas
	var infowindow = new google.maps.InfoWindow();
	var i, marker;

	for (i = 0; i < lugares.length; i++) {
		marker = new google.maps.Marker({
    	position: new google.maps.LatLng(lugares[i][1], lugares[i][2]),
      map: map03
    });

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
  		return function() {
    		infowindow.setContent(lugares[i][0]);
      	infowindow.open(map03, marker);
    	}
    })(marker, i));
  }
}
