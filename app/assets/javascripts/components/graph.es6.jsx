/* jshint strict: false, asi: true, esversion:6 */
class Graph extends React.Component {
	componentDidMount(){
		let margin = {top: 20, bottom: 20, left: 20, right: 20};
		let width = 800;
		let height = 300;
		let data = [
			{date: new Date(2017, 3, 24), value: 0},
			{date: new Date(2017, 3, 25), value: 2.75},
			{date: new Date(2017, 3, 26), value: 0},
			{date: new Date(2017, 3, 27), value: 5.50},
			{date: new Date(2017, 3, 28), value: 2.75},
		];
		let xExtent = d3.extent(data, d => d.date);
		let xScale = d3.scaleTime().domain(xExtent).range([margin.left, width - margin.right]);
		let yExtent = d3.extent(data, d => d.value);
		let yScale = d3.scaleLinear().domain(yExtent).range([height-margin.bottom, margin.top]);
		let line = d3.line().x((d) => xScale(d.date)).y((d) => yScale(d.value));
		d3.select('svg').append('path').attr('d', line(data));
	}
  render () {
  	return <svg>
 		
  	</svg>
  }
}

