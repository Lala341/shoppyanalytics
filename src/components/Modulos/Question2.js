import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer, Sector
} from 'recharts';

 

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
		fill, payload, percent, value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`(Rate ${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};
class Question2 extends Component {

  state={
    data:{


    },
    datafinal:[],
    datafinaldosp:[],

  activeIndex: 0
    }

componentDidMount(){
  var self = this;
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question2';

  fetch(url, {
      method: 'GET',
     headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then((res) => res.json()).then((response) => {
      console.log(response);
      
      self.setState({data:response, datafinal:[], datafinaldos:[]});

        self.generateone();
   

    }
    );
  
}
generateone(){
  var data= this.state.data;
  var keys= Object.keys(data);
  var datafinal=[];
  var datafinaldosp=[];
  if(keys!==undefined){
    let temp={};
    for(var i=0;i<keys.length;i++){
      temp={store: keys[i], sales: data[keys[i]]};
      datafinal.push(temp);
    }
    let sum=0;
    var datafinaldosp=[];
    for(var i=0;i<datafinal.length;i++){
      sum+=datafinal[i].sales;
      
    }
    for(var i=0;i<datafinal.length;i++){
      temp={name: keys[i], value:  parseFloat(((datafinal[i].sales/sum)*100).toFixed(2))};
      datafinaldosp.push(temp);
      
    
    
    }
    this.setState({datafinal:datafinal,datafinaldosp:datafinaldosp});
  }

}


onPieEnter = (data, index) => {
  this.setState({
    activeIndex: index,
  });
};
getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
      }
  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.datafinal.length>0)&&<div className="col-12" style={{ padding: "10%",paddingTop: "0%",paddingBottom: "4%", textAlign: "center" }}>

<h1 style={{paddingBottom: "5%",paddingLeft: "10%",  color:"grey"}}>2. What is the distribution of stores frequented by customers?</h1>  

<div className="row" style={{paddingLeft: "15%"}}>

<ResponsiveContainer width={500} height={400} >  

      <PieChart   width={500} height={400}>
        <Pie
					activeIndex={this.state.activeIndex}
					activeShape={renderActiveShape}
					data={this.state.datafinaldosp}
					cx={250}
					cy={200}
					innerRadius={60}
					outerRadius={80}
					fill="#8884d8"
					dataKey="value"
					onMouseEnter={this.onPieEnter}
				/>
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
<ResponsiveContainer width="40%" height={300}>
<BarChart
        data={this.state.datafinal}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
        
      >
        <XAxis dataKey="store" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sales" fill={this.getRandomColor()} background={{ fill: '#eee' }} />
      </BarChart>
</ResponsiveContainer>
</div>
          </div>}
  


      </div>);

  }
}
Question2.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question2);
