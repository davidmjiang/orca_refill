/* jshint strict: false, asi: true, esversion:6 */
class InfoWindow extends React.Component {
	constructor(){
		super();
		this.getDirections = this.getDirections.bind(this);
	}
	getDirections(options){
		this.refs.directionsText.innerHTML = '';
		this.props.getDirections(options, this.refs.directionsText);
	}
  render () {
  	let classes = this.props.open ? "sidebar slide-in" : "sidebar";
  	if(this.props.open){
	    return <div className={classes}>
			<button type="button" className="btn btn-default close-sidebar" onClick={this.props.handleClick}>X</button>	
	    <h1>{this.props.location.name}</h1>
	    <p>{this.props.location.address}</p>
	  	<DirectionsForm getDirections={this.getDirections} userLocation ={this.props.userLocation} />
	  	<div ref="directionsText" class="directions-text"/>
	    </div>;
  	}
  	else{
  		return <div />;
  	}
  }
}

