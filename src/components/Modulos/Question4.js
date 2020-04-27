import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question4 extends Component {

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
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question4';

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
  
  if(data["18-25"]!==undefined){
    var datafinal=[];
    var datafinaldos=[];
    var datafinaltres=[];
    var datafinalcuatro=[];
    
    var store=[1,2,3,4,5,6];
    let temp={};
    let temp2={};
    let s;

  
  console.log(data["18-25"])
  console.log(Object.keys(data))
  
  for(var i=0; i<Object.values(data["18-25"]).length;i++){
    s= data["18-25"][i];
    temp=  { name:  s.name, 
    value: s.quantity}
    

    datafinal.push(temp);

}
for(var i=0; i<Object.values(data["25-40"]).length;i++){
  s= data["25-40"][i];
  temp=  { name:  s.name, 
  value: s.quantity}
  

  datafinaldos.push(temp);

}
for(var i=0; i<Object.values(data["40-60"]).length;i++){
  s= data["40-60"][i];
  temp=  { name:  s.name, 
  value: s.quantity}
  

  datafinaltres.push(temp);

}
for(var i=0; i<Object.values(data["underage"]).length;i++){
  s= data["underage"][i];
  temp=  { name:  s.name, 
  value: s.quantity}
  

  datafinalcuatro.push(temp);

}
  this.setState({datafinal:datafinal,datafinaldos:datafinaldos,datafinaltres:datafinaltres, datafinalcuatro:datafinalcuatro});
  }

}
filtro(m,s){
  var sum=0;
  for(var i=0; i<m.length;i++){
    if(m[i].store_id===s){
      sum+=m[i].quantity;
    }
      
  }
  return sum
}
filtro2(m,s){
  for(var i=0; i<m.length;i++){
    if(m[i]._id===s){
      return m[i].quantity;
    }
      
  }
  return 0;
}
  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.datafinal.length>0)&&<div className="col-12" style={{ padding: "10%",paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "10%", color:"grey"}}>What is the distribution of sales of the products by day of the week?</h1>  


  <h3>18-25</h3>
  <ResponsiveContainer width="105%" height={300}>
<BarChart
        data={this.state.datafinal}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        
      </BarChart> 
      </ResponsiveContainer>
        <h3>25-40</h3>
        <ResponsiveContainer width="105%" height={300}>
      <BarChart
        data={this.state.datafinaldos}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        
      </BarChart>  
      </ResponsiveContainer>
      <h3>40-60</h3>
      <ResponsiveContainer width="105%" height={300}>
      <BarChart
        data={this.state.datafinaltres}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        
      </BarChart>  
      </ResponsiveContainer>
            <h3>underage</h3>
      <ResponsiveContainer width="105%" height={300}>
      <BarChart
        data={this.state.datafinalcuatro}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="value" fill="#8884d8" />
        
      </BarChart>  

      </ResponsiveContainer>

        
          </div>}
  


      </div>);

  }
}
Question4.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question4);
