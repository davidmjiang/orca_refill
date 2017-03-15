/* jshint strict: false, asi: true, esversion:6 */
class InfoWindow extends React.Component {
  render () {
  	let classes = this.props.open ? "sidebar slide-in" : "sidebar";
  	if(this.props.open){
	    return <div className={classes}>
			<button type="button" className="btn btn-default close-sidebar" onClick={this.props.handleClick}>X</button>	
	    <h1>{this.props.location.name}</h1>
	    <p>{this.props.location.address}</p>
	  	<DirectionsForm userLocation={this.props.userLocation}/>
	    </div>;
  	}
  	else{
  		return <div />;
  	}
  }
}

