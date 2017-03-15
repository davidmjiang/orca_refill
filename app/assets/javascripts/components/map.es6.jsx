/* jshint strict: false, asi: true, esversion:6 */
class Map extends React.Component {
  constructor(){
		super();
		this.state = {openWindow: null};
		this.makeLatLong = this.makeLatLong.bind(this);
		this.makeMarker = this.makeMarker.bind(this);
		this.makeInfoWindow = this.makeInfoWindow.bind(this);
		this.makeInfoWindowText = this.makeInfoWindowText.bind(this);
		this.initializeMap = this.initializeMap.bind(this);
		this.handleLocationError = this.handleLocationError.bind(this);
	}
	componentDidMount() {
		this.initializeMap();
	}
	initializeMap(mapCenter){
		//create map
		this.map = new google.maps.Map(this.refs.map, {
			//Downtown Seattle
          center: {lat: 47.6063889, lng: -122.3308333},
          zoom: 12
        });
		let infoWindow = new google.maps.InfoWindow();
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
				this.props.setUserLocation(pos);
				this.map.setCenter(pos);
				infoWindow.setPosition(pos);
				infoWindow.setContent('You are here');
				infoWindow.open(this.map);
			}, () => {
				this.handleLocationError(true, infoWindow, this.map.getCenter());
			});
		}
		else{
			this.handleLocationError(false, infoWindow, this.map.getCenter());
		}
		//create marker and info window
		this.props.locations.forEach((location) => {
			let marker = this.makeMarker(location);
		});
	}
	handleLocationError (browserHasGeolocation, infoWindow, pos){
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Your browser doesn\'t support geolocation.');
	}
	makeMarker (location){
		let marker = new google.maps.Marker({
			position: this.makeLatLong(location), 
			map: this.map,
			title: location.name
		});
		marker.addListener('click', () => {
			this.makeInfoWindow(location, marker);
			this.props.onClick(location);
		});
		return marker;
	}
	makeInfoWindow(location, marker){
		let infoWindow = new google.maps.InfoWindow({
			content: this.makeInfoWindowText(location),
			position: this.makeLatLong(location)
		});
		infoWindow.open(this.map, marker);
		//if there is already an open window, close it
	  if(this.state.openWindow){
			this.state.openWindow.close();
		}
		this.state.openWindow = infoWindow;
	}
	makeLatLong (location){
		let latLong = new google.maps.LatLng(location.latitude, location.longitude);
		return latLong;
	}
	makeInfoWindowText(location){
		return `<ul>
		<li>${location.name}</li>
		<li>${location.address}</li>
		</ul>`
	}
  render () {
		const mapStyle = {
			height: '100%'
		}
    return <div ref="map" style={mapStyle} className="map">Finding your location...</div>;
  }
}
