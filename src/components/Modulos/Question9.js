import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question9 extends Component {

  state={
    data:{


    },
    datafinal:[],
    datafinaldos:[],
    datafinaldosp:[],
    datafinaltres:[],
    datafinalcuatro:[]
    
    }

componentDidMount(){
  var self = this;
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question9';

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
getName(i){
  if(i==0){
    return "127 Store"
  }
  if(i==1){
    return "De Una"
  }
  if(i==2){
    return "La Otra Tienda"
  }
  if(i==3){
    return "Mikro"
  }
  if(i==4){
    return "Minisa"
  }
  if(i==5){
    return "None"
  }
  if(i==6){
    return "Tienda Test 170"
  }
  }
generateone(){
  var data= this.state.data;
  var u = Object.keys(data);
  var datafinaldos=[];
  for(var i=0; i<u.length;i++){
    let temp={"Store": u[i],"Number of people":data[u[i]]};

    datafinaldos.push(temp);

} 
console.log(datafinaldos);
  this.setState({datafinaldos:datafinaldos});
  

}
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
    var self= this;
    return (
      <div >
{(true)&&<div className="col-12" style={{ padding: "10%",paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "10%", color:"grey"}}>	9. Most frequented stores</h1>  


  <ResponsiveContainer width="105%" height={300}>
<BarChart
        data={this.state.datafinaldos}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Store" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="Store" height={30} stroke={this.getRandomColor()} />
        <Bar dataKey="Number of people" fill={this.getRandomColor()} />
        
      </BarChart> 
      </ResponsiveContainer>
</div>


  }
  


      </div>);

  }
}
Question9.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question9);
