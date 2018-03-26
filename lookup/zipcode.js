var geocoder;
var map;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat: 37.7549,
      lng: -122.4194
    },
    streetViewControl: false,
    fullscreenControl: true
  });

  var inputaddress = document.getElementById('id_address');
  var inputhour = document.getElementById('id_hour');
  var options = {
    types: ['address'],
    componentRestrictions: {
      country: 'us'
    }
  };
  autocomplete = new google.maps.places.Autocomplete(inputaddress, options);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
      for (var j = 0; j < place.address_components[i].types.length; j++) {
        if (place.address_components[i].types[j] == "postal_code") {
          var zipcodelookup = parseInt(place.address_components[i].long_name);
          var hourlookup = parseInt(inputhour.value);
          result = dispatch({zipcode:zipcodelookup,dispatchhour:hourlookup}).order("instances desc") 
          document.getElementById('common_incidents').innerHTML = "The most common dispatch at " + hourlookup + ":00 for this area (Zipcode:" + zipcodelookup + ") is " + result.first().dispatchtype + " with " + result.first().instances + " total instances.";
        }
      }
    }
  })
}
google.maps.event.addDomListener(window, "load", initialize);
