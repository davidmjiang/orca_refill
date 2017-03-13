/* jshint strict: false, asi: true, esversion:6 */
class App extends React.Component {
	constructor(){
		super();
		this.state = {openWindow: null};
		this.makeLatLong = this.makeLatLong.bind(this);
		this.makeMarker = this.makeMarker.bind(this);
		this.makeInfoWindow = this.makeInfoWindow.bind(this);
	}
	componentDidMount() {
		//create map
		this.map = new google.maps.Map(this.refs.map, {
			//Downtown Seattle
          center: {lat: 47.6063889, lng: -122.3308333},
          zoom: 14
        });
		//create marker and info window
		this.props.locations.forEach((location) => {
			let marker = this.makeMarker(location);

		});
	}
	makeMarker (location){
		let marker = new google.maps.Marker({
			position: this.makeLatLong(location), 
			map: this.map,
			title: location.name
		});
		marker.addListener('click', () => this.makeInfoWindow(location, marker));
		return marker;
	}
	makeInfoWindow(location, marker){
		let infoWindow = new google.maps.InfoWindow({
			content: location.name,
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
  render () {
		const mapStyle = {
			height: '100%'
		}
    return <div ref="map" style={mapStyle}></div>;
  }
}

