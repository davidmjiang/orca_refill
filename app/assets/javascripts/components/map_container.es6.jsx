/* jshint strict: false, asi: true, esversion:6 */
class MapContainer extends React.Component {
  constructor(){
		super();
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.editSidebar = this.editSidebar.bind(this);
		this.setUserLocation = this.setUserLocation.bind(this);
		this.getDirections = this.getDirections.bind(this);
		this.setMap = this.setMap.bind(this);
		this.createRequest = this.createRequest.bind(this);
		this.state = {openSidebar: false, selectedLocation: null, userLocation: null, map: null, directions: null};
		this.directionsService = new google.maps.DirectionsService();
		this.directionsDisplay = new google.maps.DirectionsRenderer();
	}
	editSidebar(location){
		if(this.state.openSidebar){
			this.setState({selectedLocation: location});
		}
		else{
			this.setState({openSidebar: !this.state.openSidebar, selectedLocation: location});
		}
	}
	toggleSidebar(){
		this.setState({openSidebar: !this.state.openSidebar});
	}
	getDirections(options, infoDiv){
		this.directionsDisplay.setMap(null);
		this.directionsDisplay.setMap(this.state.map);
		this.directionsDisplay.setPanel(infoDiv);
		let request = this.createRequest(options);
		this.directionsService.route(request, (result, status) => {
			if(status == 'OK'){
				this.directionsDisplay.setDirections(result);
			}
			else{
				infoDiv.innerHTML = "Uh-oh, something went wrong!";
			}
			this.setState({directions: true});
		});
	}
	createRequest(options){
		let origin;
		if(options.origin === "Current Location"){
			origin = this.state.userLocation;
		}
		else{
			origin = options.origin;
		}
		let destination = new google.maps.LatLng(this.state.selectedLocation.latitude, this.state.selectedLocation.longitude);
		let request = {
			origin: origin,
			destination: destination,
			travelMode: options.travelMode
		}
		return request;
	}
	setUserLocation(pos){
		this.setState({userLocation: pos});
	}
	setMap(map){
		this.setState({map: map});
	}
  render () {
    return <div className="map-container">
    	<a className="btn btn-primary mobile check-card" href="/log-in">Check my card</a>
	    <InfoWindow open={this.state.openSidebar} location={this.state.selectedLocation} userLocation={this.state.userLocation} handleClick={this.toggleSidebar} getDirections={this.getDirections}/>
	    <Map locations={this.props.locations} onClick={this.editSidebar} setUserLocation={this.setUserLocation} setMap={this.setMap}/>
    </div>;
  }
}


