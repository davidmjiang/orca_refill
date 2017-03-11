class App extends React.Component {
	componentDidMount() {
		this.map = new google.maps.Map(this.refs.map, {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
	}
  render () {
		const mapStyle = {
			height: '100%'
		}
    return <div ref="map" style={mapStyle}></div>;
  }
}

