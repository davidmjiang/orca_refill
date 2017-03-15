/* jshint strict: false, asi: true, esversion:6 */
class App extends React.Component {
	constructor(){
		super();
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.editSidebar = this.editSidebar.bind(this);
		this.setUserLocation = this.setUserLocation.bind(this);
		this.state = {openSidebar: false, selectedLocation: null, userLocation: null};
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
	setUserLocation(coords){
		this.setState({userLocation: coords});
	}
  render () {
  	const divStyle = {
			height: '100%'
		}
    return <div style={divStyle}>
	    <InfoWindow open={this.state.openSidebar} location={this.state.selectedLocation} userLocation={this.state.userLocation} handleClick={this.toggleSidebar}/>
	    <Map locations={this.props.locations} onClick={this.editSidebar} setUserLocation={this.setUserLocation}/>
    </div>;
  }
}

