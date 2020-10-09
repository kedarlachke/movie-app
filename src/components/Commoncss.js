//import { makeStyles,fade } from '@material-ui/styles';
import {fade,makeStyles,Theme,createStyles} from "@material-ui/core/styles";
import {teal} from "@material-ui/core/colors"
let primary={}
let secondary={}

export const ContainerStyle=makeStyles((theme)=>{return({
  container:{[theme.breakpoints.down("sm")]: {  
   // backgroundColor:'#fffeee',    
    "&.MuiContainer-root": {
      marginLeft: 'none', 
       marginRight: 'none',
       paddingLeft: 0,
       paddingRight: 0,
 },
  }}
})})
export const ActionBarStyle = makeStyles((theme) => {
    console.log(theme.palette.primary[500])
    return({
    
    actionbar: {      
        backgroundColor:theme.palette.primary.main,
        marginTop:20,
        
    },
    actionbarlable:{
      color:theme.palette.secondary.main,
      fontWeight:'bold',
      "&.MuiBottomNavigationAction-root": {
        minWidth: 50
       },
    },
    actionbaricon:{
      color:theme.palette.secondary.main
    },

    
  
    
  })});

  export const AppBarStyle = makeStyles((theme) => {
    
    return({
    
      menuButton: {
        marginRight: 10,
        backgroundColor:theme.palette.primary.main,
        border:'none',
        outline:'none !important',
        color:theme.palette.secondary.main
      },
      grow: {
        flexGrow: 1,
      },
      appbarlable:{
        color:theme.palette.secondary.main
      }

    
  
    
  })});

  export const CardListStyle = makeStyles((theme) => {
    console.log(theme.palette.primary[500])
    return({
    carddisplay:{
      display:'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
    }},

    cardtitle: {      
        color:theme.palette.primary.main,
        
    },
    cardbgcolor:{
      backgroundColor:theme.palette.primary[50],
    },
    

    
    
  })});

  

  export const ButtonStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  export const TableStyle = makeStyles((theme) => {
    return({
    
    //     headerStyle:{
    //     backgroundColor:theme.palette.primary.main,
    //     color:theme.palette.secondary.main,
    //     fontWeight:'bold',
    //     border: '1px solid rgba(224, 224, 224, 1)'        
    // },
    // cellStyle:{
    //     border: '1px solid rgba(224, 224, 224, 1)'
    // }

    tabledisplay:{
      display:'block',
      [theme.breakpoints.down('md')]: {
        display: 'none',
    }
  }
    
    
  })});

 export const TableOption=()=>{
     //const classes=TableStyle();
     const options={
        actionsColumnIndex: -1,
        search:false,
        showTitle:false,
        toolbar:false,
        pageSize:10,
        padding:'dense',
        headerStyle:{
          backgroundColor:primary.main,
          color:secondary.main,
          fontWeight:'bold',
          border: '1px solid ',
          borderColor :primary[300]       
      },
        cellStyle:{
          border: '1px solid',
          borderColor:primary[100]
      },

        //backgroundColor: '#01579b',
        rowStyle:{ backgroundColor:'#fff' ,color:primary[300],border: '1px solid #ccc' }
     }
     return options
 }

// export const itemcardStyle=((theme)=>{
//   alert
// return({
  
// })
// });
export const itemcardStyle = makeStyles((theme) =>{ 
  primary={...theme.palette.primary}
  secondary={...theme.palette.secondary}
  return({
  grow: {
    flexGrow: 1,
  },
  cardimage: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      
     },
    // [theme.breakpoints.down('xs')]: {
    //   display: 'block',
      
    // }
    containerstyle:{
      marginTop:'15%',
      [theme.breakpoints.down('sm')]: {
       marginTop:'30'
        
       },   
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      
    },
    color:theme.palette.secondary.main
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
})});

 export const AppbarStyles = makeStyles((theme) =>{ 
  primary={...theme.palette.primary}
  secondary={...theme.palette.secondary}
  return({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      
    },
    color:theme.palette.secondary.main
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
})});

export const fabStyles = makeStyles(theme => ({
  speedDial: {
    display: "block",
    position: "fixed",
    "&.MuiSpeedDial-directionUp": {
        bottom: 20,
        right: 20
    },
    //  [theme.breakpoints.up("sm")]: {
    //   position: "",
    //    display: "none",
    //    "&.MuiSpeedDial-directionUp": {
    //     bottom: 80,
    //     right: -60,
    // },
    //  },
    //  [theme.breakpoints.down("md")]: {
      
    //    "&.MuiSpeedDial-directionUp": {
    //     bottom: 80,
    //     right: 20,
    // },
    //  }
     

  },
  speedDial1: {
     display: "block",
    position: "fixed",
    "&.MuiSpeedDial-directionUp": {
      bottom: 20,
      right: 20
    },
    [theme.breakpoints.up("sm")]: {
      position: "",
       display: "none",
       "&.MuiSpeedDial-directionUp": {
        bottom: 20,
        right: -60,
    },
     },
     [theme.breakpoints.down("md")]: {
      
       "&.MuiSpeedDial-directionUp": {
        bottom: 20,
        right: 20,
    },
     }
  }
}));


export const FabButtonsStyles = makeStyles(theme => {
  let leftmargin='40%'
  if(window.screen.width<900){
  leftmargin='30%'}
  if(window.screen.width<800){
    leftmargin='28%'}
    if(window.screen.width<700){
      leftmargin='25%'}
      if(window.screen.width<600){
        leftmargin='20%'}
      
        if(window.screen.width<500){
          leftmargin='16%'}  
          if(window.screen.width<400){
            leftmargin='7%'}
            if(window.screen.width<=360){
              leftmargin='6%'}
 
  return({
  speedDial: {
    display: "block",
    position: "fixed",
    bottom: 10,
    left:leftmargin,
    fontWeight:'bold',
    fontSize:20
  }, modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      //border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      //float:'left'
      //width:'100%'
    },
    modaltitle:{
      display:'block',
      backgroundColor:teal[300],textAlign:'center',color:'#fff',marginTop:15,
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },
    }
})});





export const BottomappbarStyle = makeStyles((theme) => ({
 
  root: {
      position:'fixed',
      top: 'auto',
      bottom: 0,
      right:'20%',
      left:'20%',
      backgroundColor:theme.palette.primary.main,
      color:theme.palette.secondary.main,
      //width:900,
      marginLeft:'auto',
      marginRight:'auto',
      [theme.breakpoints.down('md')]: {
          //width:500
      right:0,
      left:0,
        },
    },
    iconcolor:{
      color:theme.palette.secondary.main,
    },
appBar: {
  
},


}));


//export const SaleImageStyles = makeStyles((Theme) =>({
export const SaleImageStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    },
    // title: {
    //   display: "none",
    //   [theme.breakpoints.up("sm")]: {
    //     display: "block"
    //   }
    // },
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
    }
  })
);

export const PromierntAppbarStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 50,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    alignSelf: "flex-end"
  }
}));

const ModalStyles = makeStyles((theme) => ({
  modal: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  },
  paper: {
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
  },
  }));
  