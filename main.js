jQuery(function($){

var HELLOHEADLINE = window.HELLOHEADLINE || {};

/* ==================================================
   Map
================================================== */

HELLOHEADLINE.map = function(){
	if($('.map').length > 0)
	{

		$('.map').each(function(i,e){

			$map = $(e);
			$map_id = $map.attr('id');
			$map_lat = $map.attr('data-mapLat');
			$map_lon = $map.attr('data-mapLon');
			$map_zoom = parseInt($map.attr('data-mapZoom'));
			$map_title = $map.attr('data-mapTitle');
			
			
			
			var latlng = new google.maps.LatLng($map_lat, $map_lon);			
			var options = { 
				scrollwheel: false,
				draggable: true, 
				zoomControl: true,
				disableDoubleClickZoom: false,
				disableDefaultUI: true,
				zoom: $map_zoom,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			var styles = [ 
							{
							  stylers: [
								{ hue: "#009ec6" },
								{ saturation: -10 }
							  ]
							}, {
								featureType: "road",
								elementType: "geometry",
								stylers: [
									{ lightness: 100 },
									{ visibility: "simplified" }
							  ]
							}, {
								featureType: "road",
								elementType: "labels",
								stylers: [
									{ visibility: "off" }
							  ]
							}
						];
			
			var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
			
			var map = new google.maps.Map(document.getElementById($map_id), options);
		
			var image = '/images/common/marker-helloheadline.png';
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: $map_title,
				icon: image
			});
			
			map.mapTypes.set('map_style', styledMap);
  			map.setMapTypeId('map_style');
			
			var contentString = '<p><strong>Headline Design & Print</strong><br>6 Chapel Street<br>Woking<br>Surrey GU21 6BY<br><br>01483 789056<br>info@helloheadline.com</p>';
       
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			
			google.maps.event.addListener(marker, 'click', function() {
      			infowindow.open(map,marker);
    		});

		});
	}	
}




/* ==================================================
	Init
================================================== */

$(document).ready(function(){
	HELLOHEADLINE.map();
});



});
