import React, {  Fragment,useState,useReducer,useRef,useCallback, useEffect } from 'react'
import {CardMedia,CardActionArea} from '@material-ui/core';
import {Grid, Container,Paper,Box,Typography,Divider,Zoom,TextField,InputAdornment,IconButton}  from '@material-ui/core';
import {red,green,grey,blue,cyan,orange} from '@material-ui/core/colors'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect, withRouter } from 'react-router-dom'
import {searchDataList} from './CustomHooks'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {CardListStyle} from '../Commoncss'



import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Itemdetails(props) {
    let [goback,setGoback]=useState(false)
    const {items}=props
   let item
    const classes=CardListStyle()
    let _id= new URLSearchParams(window.location.search).get("_id")
    //let _id= new URLSearchParams(this.props.location.search).get("_id")
    if(_id!=''){       
        item=items.find(item=>item.id==_id);    
    }
    if(goback){
        return <Redirect push to={'/'} />;
      }
    return (
        <Container>
            <Paper style={{marginTop:0,padding:10,margin:5}} elevation={5}>
            <ArrowBackIcon onClick={()=>setGoback(true)}/><Typography variant={"h3"} className={classes.cardtitle}>Movie Details</Typography>
            <Grid container spacing={2} > 
            <Grid item xs={12} sm={6} md={6}>
            <CardActionArea>
          
          <CardMedia className={classes.cardimage} height={700}  component="img" 
          alt={item.title} src={require("../../asset/img/"+item.poster).default} 
          title={item.title} />
  
          
          </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Typography variant={"h2"} className={classes.cardtitle}>{item.title }</Typography>
            <Typography style={{fontSize:'1.8rem',overflow: 'hidden',color:grey[600]}} wrap="nowrap"><b>IMDB Rating</b> : {item.imdbRating }</Typography>
            <Typography style={{fontSize:'1.8rem',color:grey[600]}}><b>Duration</b> : {item.duration.substring(2,item.duration.length) }</Typography>
            <Typography style={{fontSize:'1.8rem',overflow: 'hidden',color:grey[600]}} wrap="nowrap"><b>Casting</b> : {item.actors.join(' | ') }</Typography>
            <Typography style={{fontSize:'1.8rem',overflow: 'hidden',color:grey[600]}} wrap="nowrap"><b>Story Line</b> : {item.storyline }</Typography>
            
            </Grid>

            </Grid>
            </Paper>
        </Container>
    )
}

export default withRouter(Itemdetails)
