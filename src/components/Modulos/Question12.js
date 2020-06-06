import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, ComposedChart, Line,Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question12 extends Component {

  state={
    data:[],
    datafinal:[],
    datafinaldos:[],
    datafinaldosp:[],
    datafinaltres:[]
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
componentDidMount(){
  var self = this;
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question12';

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
  
}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.data.length>0)&&<div className="col-12" style={{ padding: "10%",paddingLeft: "25%", paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "0%", color:"grey"}}>12. Number of customers who only shopped once</h1>  


          </div>}
  
          
<div className="col-7" style={{paddingLeft: "20%"}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Count</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(function(e){
     return <tr>
      <th scope="row">{e["_id"]}</th>
      <td>{e["count"]}</td>
    </tr>
    })}
    
  </tbody>
</table>

</div>

      </div>);

  }
}
Question12.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question12);
