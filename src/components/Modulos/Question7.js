import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question7 extends Component {

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
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question7';

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
  var u = Object.keys(data);
  var datafinaldos=[];
  for(var i=0; i<u.length;i++){
    let s= u[i];
    var fina=[];
    for(var j=0; j< Object.keys(data[s]).length;j++){
      let temp={"Days": Object.keys(data[s])[j],"Number of people":Object.values(data[s])[j]}
      fina.push(temp);
    }
    

    datafinaldos.push(fina);

}
console.log(datafinaldos);
  this.setState({datafinaldos:datafinaldos});
  

}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(true)&&<div className="col-12" style={{ padding: "10%",paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "10%", color:"grey"}}>7. Store visitors by time of the day</h1>  

{this.state.datafinaldos.map(function(e,i){
  return <div><h3>{[i]}</h3>
  <ResponsiveContainer width="105%" height={300}>
<BarChart
        data={e}
        margin={{
          top: 5, right: 30, left: 70, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Days" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="Days" height={30} stroke="#8884d8" />
        <Bar dataKey="Number of people" fill="#8884d8" />
        
      </BarChart> 
      </ResponsiveContainer>
</div>
})

}

  
        
          </div>}
  


      </div>);

  }
}
Question7.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question7);