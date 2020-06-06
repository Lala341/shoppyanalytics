import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question16 extends Component {

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
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question16';

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


}

  render() {
    const { classes } = this.props;
    var self= this;
    return (
      <div >
{(true)&&<div className="col-12" style={{ padding: "10%",paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "10%", color:"grey"}}>16. Monthly income in Colombian pesos for each store.</h1>  

 
  <ResponsiveContainer width="70%" height={300} style={ {textAlign: "center"} }>
<BarChart
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 100, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="April" fill="#8884d8" />
        <Bar dataKey="February" fill="#8884d8" />
        <Bar dataKey="March" fill="#8884d8" />
        
      </BarChart> 
      </ResponsiveContainer>



  
        
          </div>}
  


      </div>);

  }
}
Question16.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question16);
