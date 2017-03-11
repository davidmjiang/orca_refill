class App extends React.Component {
	componentDidMount() {
		this.map = new google.maps.Map(this.refs.map, {
			//Downtown Seattle
          center: {lat: 47.6063889, lng: -122.3308333},
          zoom: 14
        });
	}
  render () {
		const mapStyle = {
			height: '100%'
		}
    return <div ref="map" style={mapStyle}></div>;
  }
}

