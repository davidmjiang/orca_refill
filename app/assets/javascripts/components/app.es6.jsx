/* jshint strict: false, asi: true, esversion:6 */
class App extends React.Component {
  render () {
  	return <div className="react-root">
  	<MapContainer locations={this.props.locations}/>
  	</div>
  }
}

