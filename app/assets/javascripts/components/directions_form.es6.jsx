/* jshint strict: false, asi: true, esversion:6 */
class DirectionsForm extends React.Component {
	constructor(){
		super();
		this.state = {origin: ""}
		this.useCurrentLocation = this.useCurrentLocation.bind(this);
		this.processForm = this.processForm.bind(this);
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
	processForm(e){
		e.preventDefault();
		console.log(e);
	}
  render () {
    return <div>
    <form className="directions-form" onSubmit={this.processForm}>
    	<div className="form-group">
	  	Get directions from <input type="text" className="form-control" name="origin" id="origin" value={this.state.origin} onChange={this.updateOrigin}/> 
    	</div>
    	<div className="form-check">
    		<label className="form-check-label">
	  		<input type="checkbox" className="form-check-input" name="current-location" disabled={!this.props.userLocation} onChange={this.useCurrentLocation}/>Use my current location
	  		</label>
    	</div>
    	<div className="form-group">
		  	Mode of transport: 
		  	<select className="custom-select">
		  		<option value="WALKING" selected="selected">Walking</option>
		  		<option value="TRANSIT">Transit</option>
		  		<option value="DRIVING">Driving</option>
		  	</select>
	  	</div>
	  	<button type="submit" className="btn btn-primary">Submit</button>
	  	</form>
	  </div>
  }
}
