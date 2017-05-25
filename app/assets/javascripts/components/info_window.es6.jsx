/* jshint strict: false, asi: true, esversion:6 */
class InfoWindow extends React.Component {
	constructor(){
		super();
		this.getDirections = this.getDirections.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
	}
	getDirections(options, ref){
		this.props.getDirections(options, ref);
	}
  handleChoice(location){
    this.props.handleChoice(location);
  }
  render () {
  	let classes = this.props.open ? "sidebar slide-in" : "sidebar";
    let backButton = this.props.userLocation ? <button type="button" className="btn btn-link back-button" onClick={this.props.backButton}>Back</button> : null;
  	if(this.props.open && this.props.location){
	    return <div className={classes}>
      {backButton}
			<button type="button" className="btn btn-default close-sidebar" onClick={this.props.handleClick}>&times;</button>	
	    <h4 className="info-window-name">{this.props.location.name}</h4>
	    <p className="info-window-address">{this.props.location.address}</p>
	  	<DirectionsForm getDirections={this.getDirections} userLocation ={this.props.userLocation} />
	    </div>;
  	}
    else if(this.props.userLocation){
      return <div className={classes}>
      <h3>Your closest locations:</h3>
      <div className="list-group">
        {this.props.closest.map((result) => <Listing key={result.location.id} result={result} handleClick={this.handleChoice}/>)}
      </div>
      </div>;
    }
  	else if(this.props.location){
  		return <div className={classes} onClick={this.props.handleClick}>
  			<p>{this.props.location.name}</p>
  		</div>;
  	}
  	else{
  		return <div className={classes}>
  			<p>Click an ORCA refill location for directions</p>
  		</div>;
  	}
  }
}

