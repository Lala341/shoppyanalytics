import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, ComposedChart, Line,Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question12 extends Component {

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
  var keys= Object.keys(data);
  var datafinal=[];
  var datafinaldos= [];
  if(keys!==undefined){
    let temp={};
    for(var i=0;i<4;i++){
      temp={name: keys[i],value: data[keys[i]]};
      
      datafinal.push(temp);
    }
    for(var i=0;i<keys.length;i++){
      temp={name: keys[i],value: data[keys[i]]};
      
      datafinaldos.push(temp);
    }
    
    this.setState({datafinal:datafinal, datafinaldos:datafinaldos});
  }
}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.datafinal.length>0)&&<div className="col-12" style={{ padding: "10%",paddingLeft: "25%", paddingTop: "5%", paddingBottom: "0%", textAlign: "center" }}>
<h1 style={{paddingBottom: "5%", paddingLeft: "0%", color:"grey"}}>5. What is the ratio between users that pay in cash vs people that pay with credit card?</h1>  


          </div>}
  
          
<div className="col-7" style={{paddingLeft: "20%"}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">Counte</th>
    </tr>
  </thead>
  <tbody>

    {this.state.data.map((e)=>
      <tr>
      <th scope="row">{e["_id"]}</th>
      <td>{e["count"]}</td>
    </tr>
    )}
    
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
