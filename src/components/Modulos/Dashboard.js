import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question5 from './Question5';
import Question4 from './Question4';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import Question12 from './Question12';
import Question13 from './Question13';
import Question16 from './Question16';
import Question14 from './Question14';
import Question17 from './Question17';
import Question18 from './Question18';

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
<Question6/>
<Question7/>
<Question8/>
<Question9/>
<Question10/>

<Question12/>
<Question13/>
<Question14/>
<Question16/>
<Question17/>
<Question18/>

      </div>);

  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(Dashboard);
