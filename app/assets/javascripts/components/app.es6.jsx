/* jshint strict: false, asi: true, esversion:6 */
class App extends React.Component {
  render () {
  	return <div>
  	<Header />
  	<MapContainer locations={this.props.locations}/>
  	</div>
  }
}

