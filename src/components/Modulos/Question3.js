import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question3 extends Component {

  state={
    data:{


    },
    datafinal:[],
    datafinaldos:[],
    datafinaldosp:[],
    datafinaltres:[]
    }

componentDidMount(){
  var self = this;
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question3';

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
    var keysbrands= Object.keys(data[keys[0]].brands);
    let temp={};
    for(var i=0;i<keys.length;i++){
      temp={name: data[keys[i]].name};
      
      for(var j=0;j<keysbrands.length;j++){
      
        temp[keysbrands[j]]=data[keys[i]].brands[keysbrands[j]];
        
      }
      datafinal.push(temp);
    }
    
    this.setState({datafinal:datafinal});
  }
}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.datafinal.length>0)&&<div className="col-12" style={{ padding: "10%",paddingTop: "0%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "10%", color:"grey"}}>What is the behaviour of the brands given the stores?</h1>  

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
        
        <Bar dataKey="Alqueria" fill="#82ca9d" />
        <Bar dataKey="Corona" fill="yellow" />
        <Bar dataKey="Doritos" fill="violet" />
        <Bar dataKey="Poker" fill="blue" />
      </BarChart>  

      </ResponsiveContainer>

      

        
          </div>}
  


      </div>);

  }
}
Question3.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question3);
