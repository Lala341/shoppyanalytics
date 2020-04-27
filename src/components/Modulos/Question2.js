import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question2 extends Component {

  state={
    data:{


    },
    datafinal:[],
    datafinaldosp:[]
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
      temp={store: keys[i], quantity: data[keys[i]]};
      datafinal.push(temp);
    }
    let sum=0;
    var datafinaldosp=[];
    for(var i=0;i<datafinal.length;i++){
      sum+=datafinal[i].quantity;
      
    }
    for(var i=0;i<datafinal.length;i++){
      temp={name: keys[i], value:  parseFloat(((datafinal[i].quantity/sum)*100).toFixed(2))};
      datafinaldosp.push(temp);
      
    
    
    }
    this.setState({datafinal:datafinal,datafinaldosp:datafinaldosp});
  }

}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.datafinal.length>0)&&<div className="col-12" style={{ padding: "10%",paddingTop: "0%",paddingBottom: "4%", textAlign: "center" }}>

<h1 style={{paddingBottom: "5%",paddingLeft: "10%",  color:"grey"}}>What is the distribution of stores frequented by users?</h1>  

<div className="row">

<ResponsiveContainer width="35%" height={400}>  

      <PieChart   width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={true} data={this.state.datafinaldosp} cx={200} cy={200} outerRadius={80} fill="#82ca9d" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
<ResponsiveContainer width="50%" height={300}>
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
        <Bar dataKey="quantity" fill="#8884d8" background={{ fill: '#eee' }} />
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
