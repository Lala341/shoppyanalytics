import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, ResponsiveContainer
} from 'recharts';

class Question1 extends Component {

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
  var url = 'http://ec2-18-212-16-222.compute-1.amazonaws.com:8084/analytics/question1';

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
  console.log(data.Monday);
  
  if(data.Monday!==undefined){
    var datafinal=[];
    var datafinaldos=[];
    var datafinaltres=[];
    
    var store=[1,2,3,4,5,6];
    let temp={};
    let temp2={};
    let s=1;

    var list=data.Monday;
    for(var i=0; i<list.length;i++){
      temp2=  { brand: list[i].brand,
      name: list[i].name,
      price: list[i].price,
      value: list[i].quantity,
      sku: list[i].sku,
      store: list[i].store_id,
      Monday: this.filtro2(data.Monday,list[i]._id),
      Tuesday: this.filtro2(data.Tuesday,list[i]._id),
      Wednesday: this.filtro2(data.Wednesday,list[i]._id),
      Thursday: this.filtro2(data.Thursday,list[i]._id),
      Friday: this.filtro2(data.Friday,list[i]._id),
      Saturday:this.filtro2(data.Saturday,list[i]._id),
      Sunday: this.filtro2(data.Sunday,list[i]._id)}
      datafinaltres.push(temp2);
    };

      

  
  for(var i=0; i<store.length;i++){
    s= store[i];
    temp=  { name: 'Store_ id ' + s, Monday: this.filtro(data.Monday,store[i]),
    Tuesday: this.filtro(data.Tuesday,store[i]),
    Wednesday: this.filtro(data.Wednesday,store[i]),
    Thursday: this.filtro(data.Thursday,store[i]),
    Friday: this.filtro(data.Friday,store[i]),
    Saturday:this.filtro(data.Saturday,store[i]),
    Sunday: this.filtro(data.Sunday,store[i])};

    datafinal.push(temp);

}
  let temp3=[0,0,0,0,0,0,0];
  for(var i=0; i<datafinal.length;i++){
    temp3[0]+=datafinal[i].Monday;
    temp3[1]+=datafinal[i].Tuesday;
    temp3[2]+=datafinal[i].Wednesday;
    temp3[3]+=datafinal[i].Thursday;
    temp3[4]+=datafinal[i].Friday;
    temp3[5]+=datafinal[i].Saturday;
    temp3[6]+=datafinal[i].Sunday;

    
  }
  
  datafinaldos=[{ name: 'Monday', value: temp3[0] },{ name: 'Tuesday', value: temp3[1] }
  ,{ name: 'Wednesday', value: temp3[2] },{ name: 'Thursday', value: temp3[3] },{ name: 'Friday', value: temp3[4] },
  { name: 'Saturday', value: temp3[5] },{ name: 'Sunday', value: temp3[6] }];
  var total=0;

  for(var i=0; i<datafinaldos.length;i++){
    total+=datafinaldos[i].value;
}
  let  datafinaldosp=[{ name: 'Monday', value: parseFloat(((temp3[0]/total)*100).toFixed(2))},{ name: 'Tuesday', value: parseFloat(((temp3[1]/total)*100).toFixed(2)) }
  ,{ name: 'Wednesday', value: parseFloat(((temp3[2]/total)*100).toFixed(2)) },{ name: 'Thursday', value: parseFloat(((temp3[3]/total)*100).toFixed(2)) },{ name: 'Friday', value: parseFloat(((temp3[4]/total)*100).toFixed(2)) },
  { name: 'Saturday', value: parseFloat(((temp3[5]/total)*100).toFixed(2)) },{ name: 'Sunday', value: parseFloat(((temp3[6]/total)*100).toFixed(2)) }];

console.log(datafinaltres);
  this.setState({datafinal:datafinal, datafinaldos:datafinaldos, datafinaldosp: datafinaldosp, datafinaltres:datafinaltres});
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
        <Bar dataKey="Monday" fill="#8884d8" />
        <Bar dataKey="Tuesday" fill="#82ca9d" />
        <Bar dataKey="Wednesday" fill="yellow" />
        <Bar dataKey="Thursday" fill="red" />
        <Bar dataKey="Friday" fill="blue" />
        <Bar dataKey="Saturday" fill="violet" />
        <Bar dataKey="Sunday" fill="green" />
      </BarChart>  

      </ResponsiveContainer>

      <div className="row">
      <ResponsiveContainer width="65%" height={300}>
      <BarChart
        data={this.state.datafinal}
        margin={{
          top: 5, right: 1, left: 70, bottom: 5,
        }}

         
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="Monday" fill="#8884d8" />
        <Bar dataKey="Tuesday" fill="#82ca9d" />
        <Bar dataKey="Wednesday" fill="#8884d8" />
        <Bar dataKey="Thursday" fill="#82ca9d" />
        <Bar dataKey="Friday" fill="#8884d8" />
        <Bar dataKey="Saturday" fill="#82ca9d" />
        <Bar dataKey="Sunday" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="35%" height={400}>    
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={true} data={this.state.datafinaldosp} cx={200} cy={200} outerRadius={80} fill="#82ca9d" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
      </div>
        

        
          </div>}
  


      </div>);

  }
}
Question1.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Question1);
