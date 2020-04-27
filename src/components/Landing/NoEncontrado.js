import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NoEncontradoStyles } from "../../styles";


class NoEncontrado extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.grow}>

        <div className="col-12" style={{ padding: "10%", textAlign: "center" }}>
          <h1 className={classes.txts11f}>404 </h1>
          <h1 className={classes.txts11fu}>Sitio no encontrado </h1>
        </div>
  


      </div>);

  }
}
NoEncontrado.propTypes = {
  classes: PropTypes.object.isRequired,

};
export default withStyles(NoEncontradoStyles)(NoEncontrado);
