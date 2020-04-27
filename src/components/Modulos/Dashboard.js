import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question5 from './Question5';
import Question4 from './Question4';

class Dashboard extends Component {

 
  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
<Question1/>
<Question2/>
<Question3/>
<Question4/>

<Question5/>
      </div>);

  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Dashboard);
