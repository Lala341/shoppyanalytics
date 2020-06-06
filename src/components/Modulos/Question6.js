import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question6 extends Component {

  state={
    data:{


    },
    datafinal:[],
    datafinaldosp:[]
    , 
    producto:[],
   ventas:[],
   productosdoritos:[],
   ventasdoritos:[],
   
    }

componentDidMount(){
  var self = this;
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question6';

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
   var producto= Object.keys(data[0]);
   console.log(data);
   var ventas= [
     {"product":producto[0] , "sales":data[0][producto[0]]}, {"product":producto[1] , "sales":data[0][producto[1]]}];
     var producto= Object.keys(data[1]);
     var ventasdoritos= [{"product":producto[0] , "sales":data[1][producto[0]]}, {"product":producto[1] , "sales":data[1][producto[0]]}];
    ;
   this.setState({producto: producto,
    ventas: ventas,
    ventasdoritos:ventasdoritos})

}

  render() {
    const { classes } = this.props;
    return (
      <div >
{(this.state.data.length>0)&&<div className="col-12" style={{ padding: "10%",paddingTop: "0%",paddingBottom: "4%", textAlign: "center" }}>

<h1 style={{paddingBottom: "5%",paddingLeft: "10%",  color:"grey"}}>6. How do products of the same category but different brands compare to each other?</h1>  

<div className="row">

<ResponsiveContainer width="50%" height={300}>
<BarChart
        data={this.state.ventas}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
        
      >
        <XAxis dataKey="product" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
</ResponsiveContainer>
<ResponsiveContainer width="50%" height={300}>
<BarChart
        data={this.state.ventasdoritos}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
        
      >
        <XAxis dataKey="product" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
</ResponsiveContainer>
</div>
          </div>}
  


      </div>);

  }
}
Question6.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question6);
