import { fade, makeStyles } from '@material-ui/core/styles';

export const appstyles = theme => ({
    grow: {
      flexGrow: 0.5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      color: "#4d6678"
    }, elementsarr: {
      paddingTop: "15vh",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
  
    }, elementsarrimg: {
      paddingTop: "15vh",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
  
    },
    title: {
      paddingTop: "1%",
      paddingBottom: "1%",
      width: "13%",
      fontFamily: "Futura",
      fontSize: "2vh",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#4d6678",
      paddingLeft: "2%",
      paddingRight: "2%",
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    appbar: {
      backgroundColor: "white",
      width: "100vw",
      margin: "0%",
      padding: "0%",
      position: "sticky",
      opacity: "0.9",
  
  
    },
    titleButton: {
      fontFamily: "Futura",
      fontSize: "2vh",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#4d6678",
      paddingLeft: "1%",
      paddingRight: "1%",
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    finalback: {
      width: "100%",
      [theme.breakpoints.down('md')]: {
        width: "100%",
        paddingTop: '50%',
      },
    },
    finalbackimg: {
      width: "100%",
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    button: {
      fontSize: "2vh",
      color: "white",
      borderRadius: "7.3px",
      backgroundColor: "#f16028",
      '&:hover': {
        color: "white",
        fontWeight: "bold !important"
      }
  
    },
    button2: {
      fontSize: "2vh",
      color: "white",
      opacity: "0.78",
      borderRadius: "7.3px",
      backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a)",
      '&:hover': {
        color: "white",
        background:"rgba(0,0,0,0.5)",
  
        fontWeight: "bold !important"
      }
    },
    txts11: {
      fontFamily: "Dosis",
      fontSize: "4vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#f16028",
      [theme.breakpoints.up('md')]: {
        fontSize: "6vh",
      },
    },
    txts12: {
      fontFamily: "Dosis",
      fontSize: "3vh",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#506677",
  
    },
    txts13: {
      fontFamily: "Roboto",
      fontSize: "2vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#000000",
    },
    txts14: {
      opacity: "0.78",
      marginRight: "2%",
      fontSize: "2vh",
      marginTop: "3%",
      marginBottom: "3%",
  
      borderRadius: "23.7px",
      backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a 100%)",
    },
    txts15: {
      fontSize: "2vh",
      marginTop: "3%",
      marginBottom: "3%",
  
      borderRadius: "23.7px",
      backgroundColor: "#f16028",
    },
    conts1: {
      padding: "5%"
    },
    elements21: {
      fontFamily: "Dosis",
      fontSize: "5.5vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#f16028",
    },
    elements22: {
      fontFamily: "Roboto",
      fontSize: "2vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#000000",
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    elements23: {
      padding: "4%",
      fontFamily: "Dosis",
      fontSize: "3vh",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#506677",
    },
  
    elements24: {
      fontFamily: "Roboto",
      fontSize: "2vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#000000",
    },
    elements31: {
      fontFamily: "Dosis",
      fontSize: "5.42vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterspacing: "normal",
      textAlign: "center",
      color: "#f16028",
    },
    elements32: {
      fontFamily: "Roboto",
      fontSize: "2vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "left",
      color: "#000000",
    },
    elements312: {
      fontFamily: "Dosis",
      fontSize: "5.42vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterspacing: "normal",
      textAlign: "center",
      color: "white",
    },
    elements322: {
      fontFamily: "Roboto",
      fontSize: "2vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "right",
      color: "white",
    },
    elements33: {
      fontFamily: "Dosis",
      fontSize: "4.21vh",
      fontWeight: "600",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      textAlign: "center",
      color: "#f16028",
    },
    elements51: {
      fontFamily: "Dosis",
      fontSize: "5.42vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#506677",
    },
    elements51w: {
      fontFamily: "Dosis",
      fontSize: "5.42vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "white",
      [theme.breakpoints.down('md')]: {
        paddingTop: "50%",
      },
    },
    elements52w: {
      fontFamily: "Dosis",
      fontSize: "3vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "white",
      padding: "5%",
  
    },
    elements41: {
      fontFamily: "Dosis",
      fontSize: "3vh",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#506677",
    }
    ,
    elements42: {
      fontFamily: "Roboto",
      fontSize: "1.58vh",
      fontWeight: "300",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      textAlign: "center",
      color: "#474747",
    },
    txts14f: {
      opacity: "0.78",
      marginRight: "2%",
      fontSize: "2vh",
      marginTop: "1%",
      marginBottom: "15%",
      bottom: "0",
      borderRadius: "23.7px",
      backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a 100%)",
    }
  
  });

const drawerWidth = 240;
export const NoEncontradoStyles = theme => ({
  grow: {
    flexGrow: 0.5,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: "#4d6678"
  },
  title: {
    paddingTop: "1%",
    paddingBottom: "1%",
    width: "13%",
    fontFamily: "Futura",
    fontSize: "2vh",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#4d6678",
    paddingLeft: "2%",
    paddingRight: "2%",
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appbar: {
    backgroundColor: "transparent",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  titleButton: {
    fontFamily: "Futura",
    fontSize: "2vh",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#4d6678",
    paddingLeft: "1%",
    paddingRight: "1%",
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  finalback: {
    width: "100%",

  },
  finalbackOcu1: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  finalbackOcu2: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  button: {
    fontSize: "2vh",

    borderRadius: "7.3px",
    backgroundColor: "#f16028",
  },
  button2: {
    fontSize: "2vh",
    opacity: "0.78",
    borderRadius: "7.3px",
    backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a)",
    '&:hover': {
      color: "white",
      fontWeight: "bold !important"
    }
  },
  txts11: {
    fontFamily: "Dosis",
    fontSize: "4vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#f16028",
    [theme.breakpoints.up('md')]: {
      fontSize: "6.6vh",
    },
  },
  txts11f: {
    fontFamily: "Dosis",
    fontSize: "20vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f16028",
    [theme.breakpoints.up('md')]: {
      fontSize: "20vh",
    },
  },
  txts11fu: {
    fontFamily: "Dosis",
    paddingTop: "2%",
    fontSize: "4.5vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f16028",
    [theme.breakpoints.up('md')]: {
      fontSize: "6.6vh",
    },
  },
  txts11fl: {
    fontFamily: "Dosis",
    fontSize: "17vw",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f16028",
    paddingTop: "38vw",
    paddingBottom: "10vw",
    [theme.breakpoints.up('md')]: {
      fontSize: "12vh",
      paddingTop: "10vw",
    },
  },
  txts11ff: {
    fontFamily: "Dosis",
    fontSize: "3.5vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f16028",
    paddingTop: "3%"

  },
  txts12: {
    fontFamily: "Dosis",
    fontSize: "3vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#506677",

  },
  txts12f: {
    fontFamily: "Dosis",
    fontSize: "3vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#506677",

  },
  txts12ff: {
    fontFamily: "Dosis",
    fontSize: "3vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#506677",
    paddingLeft : "5vw",
    paddingBottom: "2vw"

  },
  txts13: {
    fontFamily: "Roboto",
    fontSize: "2vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#646262",
  },
  txts14: {
    opacity: "0.78",
    marginRight: "2%",
    fontSize: "2vh",
    marginTop: "3%",
    marginBottom: "3%",

    borderRadius: "23.7px",
    backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a 100%)",
  },
  txts14f: {
    opacity: "0.78",
    marginRight: "2%",
    fontSize: "3.5vh",
    marginTop: "3%",
    marginBottom: "3%",

    borderRadius: "23.7px",
    backgroundImage: "linear-gradient(to right, #bd2d63 0%, #be305e 31%, #c23952 63%, #c8483e 94%, #ca4c3a 100%)",
    '&:hover': {
      color: "white",
      background:"rgba(0,0,0,0.5)",
      fontWeight: "bold !important",

    }
  },
  txts15: {
    fontSize: "2vh",
    marginTop: "3%",
    marginBottom: "3%",

    borderRadius: "23.7px",
    backgroundColor: "#f16028",
  },
  conts1: {
    padding: "5%"
  },
  elements21: {
    fontFamily: "Dosis",
    fontSize: "5.5vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#f16028",
  },
  elements22: {
    fontFamily: "Roboto",
    fontSize: "2vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#646262",
  },
  elements23: {
    padding: "4%",
    fontFamily: "Dosis",
    fontSize: "2.37vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#506677",
  },

  elements24: {
    fontFamily: "Roboto",
    fontSize: "1.58vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#646262",
  },
  elements31: {
    fontFamily: "Dosis",
    fontSize: "5.42vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterspacing: "normal",
    textAlign: "center",
    color: "#f16028",
  },
  elements32: {
    fontFamily: "Roboto",
    fontSize: "2vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#646262",
  },
  elements312: {
    fontFamily: "Dosis",
    fontSize: "5.42vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterspacing: "normal",
    textAlign: "center",
    color: "white",
  },
  elements322: {
    fontFamily: "Roboto",
    fontSize: "2vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "right",
    color: "white",
  },
  elements33: {
    fontFamily: "Dosis",
    fontSize: "4.21vh",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    textAlign: "center",
    color: "#f16028",
  },
  elements51: {
    fontFamily: "Dosis",
    fontSize: "5.42vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#506677",
  },
  elements41: {
    fontFamily: "Dosis",
    fontSize: "3vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#506677",
  }
  ,
  elements42: {
    fontFamily: "Roboto",
    fontSize: "1.58vh",
    fontWeight: "300",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#474747",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  elementCheck: {
    width: "10vw !important", height: "10vw !important",
    borderColor: "#474747",

  },
  
 
  ocultarMob: {
    [theme.breakpoints.down('md')]: {
      display: 'none',

    }
  },
  ocultar: {
    [theme.breakpoints.up('md')]: {
      display: 'none',

    }
  },
  txts122:{
    fontFamily: "Dosis",
    fontSize: "2vh",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.2",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#506677",
  },
  objWha:{
    width: "150%",
    [theme.breakpoints.down('md')]: {
      width: "70%",
  
    },
  }

});