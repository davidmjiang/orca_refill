/* jshint strict: false, asi: true, esversion:6 */
class Listing extends React.Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.props.handleClick(this.props.result.location);
	}
  render () {
    return <button className="listing list-group-item list-group-item-action" onClick={this.handleClick}>
    	{this.props.result.location.name} -
    	{this.props.result.location.address}
    </button>;
  }
}

