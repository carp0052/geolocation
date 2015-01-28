//Javascript Document

document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
   
    var params = {enableHighAccuracy: true, timeout:60000, maximumAge:60000};    
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
  }else{
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});

function reportPosition( position ){ 
	var canvas = document.createElement('canvas');
		canvas.width = 400;
		canvas.height = 400;
		
	
  var context = canvas.getContext('2d');
  var img = document.createElement("img");
   img.onload = function() {
    context.drawImage(img, 0, 0, 400, 400);
  }
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red%7C" + position.coords.latitude + ","+ position.coords.longitude + "&key=AIzaSyATsnsQQJ0k8bKolw000mqwGj7cJ85-RFk";
	
	document.querySelector("#output").appendChild(canvas);
	
	var foundYou = document.querySelector("#foundYou");
  foundYou.innerHTML = "Ah, found you!<br/><br/>" + "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>";
};

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}