import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import NoEncontrado from "./components/Landing/NoEncontrado";
import { BrowserRouter as Link, Route, Router, Switch } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import history from './history';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {appstyles} from "./styles";
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Dashboard from './components/Modulos/Dashboard';



class App extends Component {


  state = {
    isMobileMenuOpen: false,
    anchorEl: null,
    setAnchorEl: null,
}

  componentDidMount() {
    
  }

  render() {
    const { classes } = this.props;
    

    const handleMobileMenuClose = () => {
      this.setState({
        isMobileMenuOpen: false
      });
    };




    const handleMobileMenuOpen = event => {
      this.setState({
        isMobileMenuOpen: true
      });
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={this.state.isMobileMenuOpen}
        onClose={handleMobileMenuClose}

      >
        <MenuItem>
          <a href="/" style={{ color: "#4d6678", textDecoration: "none" }} >
            Dashboard
          </a>


        </MenuItem>
        
      </Menu>
    );

    return (
      <div >
        <AppBar position="static" className={classes.appbar}
        >
          <Toolbar >

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleMobileMenuOpen}

            >

              <MenuIcon />

            </IconButton>

            <Typography className={classes.menuButton}  >
              <a href="/"  >
                </a>

            </Typography>
            <Typography className={classes.title}  >
              <a href="/"  >
                 </a>

            </Typography>
            <div className={classes.grow} />


            
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <ListItem button key={"Dashboard"}>
                <img src="https://i.ibb.co/GcXnV1K/icon-Only-White.png" alt="icon" width="150px"/>
              </ListItem>
             <ListItem button key={"Dashboard"}>
                <ListItemIcon> <DataUsageIcon /> </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
           
          </List>
         
        </div>
      </Drawer>
        <Router history={history}>
          <Switch>
          <Route exact path="/" render={(props) => <Dashboard {...props} self={this} />}/>

            <Route exact path="*" render={(props) => <NoEncontrado {...props} self={this} />}/>

          </Switch>
        </Router>
      </div>);

  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(appstyles)(App);
