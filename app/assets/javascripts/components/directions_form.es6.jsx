/* jshint strict: false, asi: true, esversion:6 */
class DirectionsForm extends React.Component {
	constructor(){
		super();
		this.state = {origin: "", travelMode: "WALKING"}
		this.useCurrentLocation = this.useCurrentLocation.bind(this);
		this.processForm = this.processForm.bind(this);
		this.updateTravelMode = this.updateTravelMode.bind(this);
		this.updateOrigin = this.updateOrigin.bind(this);
		this.checkEnter = this.checkEnter.bind(this);
	}
	componentDidMount(){
		// if geolocation is on, automatically get walking directions from there
		if(this.props.userLocation){
			this.setState({origin: "Current Location"})
			this.processForm("WALKING", "Current Location");
		}
	}
	useCurrentLocation(e){
		if(e.target.checked){
			this.setState({origin: "Current Location"});
		}
		else{
			this.setState({origin: ""});
		}
	}
	updateOrigin(e){
		this.setState({origin: e.target.value});
	}
	updateTravelMode(e){
		let travelMode = e.currentTarget.getAttribute("value")
		this.processForm(travelMode)
	}
	checkEnter(e){
		if(e.which == 13){
			e.preventDefault();
			this.processForm("WALKING");
		}
	}
	processForm(travelMode, origin){
		origin = origin || this.state.origin;
		travelMode = travelMode || "WALKING";
		this.refs.directionsText.innerHTML = '';
		this.props.getDirections({origin: origin, travelMode: travelMode}, this.refs.directionsText);
	}

  render () {
    return <div>
    <form className="directions-form" onSubmit={this.processForm}>
    	<div className="form-group">
	  	Get directions from <input type="text" className="form-control" name="origin" id="origin" value={this.state.origin} onChange={this.updateOrigin} onKeyDown={this.checkEnter}/> 
    	</div>
    	<div className="form-check">
    		<label className="form-check-label">
	  		<input type="checkbox" className="form-check-input" name="current-location" disabled={!this.props.userLocation} onChange={this.useCurrentLocation}/>Use my current location
	  		</label>
    	</div>
    	<div className="form-group">
	    	<ul className="travel-options">
		    	<li onClick={this.updateTravelMode} value="WALKING"><i className="material-icons">directions_walk</i></li>
		    	<li onClick={this.updateTravelMode} value="TRANSIT"><i className="material-icons">directions_transit</i></li>
		    	<li onClick={this.updateTravelMode} value="DRIVING"><i className="material-icons">directions_car</i></li>
	    	</ul>
	  	</div>
	  	</form>
	  	<div ref="directionsText" className="directions-text"/>
	  </div>
  }
}

