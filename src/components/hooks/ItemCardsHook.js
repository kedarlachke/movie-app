import React, {  Fragment,useState,useReducer,useRef,useCallback, useEffect } from 'react'
import {CardMedia,CardActionArea} from '@material-ui/core';
import {Grid, Container,Paper,Box,Typography,Divider,Zoom,TextField,InputAdornment,IconButton}  from '@material-ui/core';
import {red,green,grey,blue,cyan,orange} from '@material-ui/core/colors'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect, withRouter } from 'react-router-dom'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {CardListStyle} from '../Commoncss'
import CloseIcon from '@material-ui/icons/Close';
import {dynamicListHooks} from './CustomHooks'

const initialState={
    looding:'false',
    ItemList:[],
    error:'',
    hasMore:true
  }
//const pageSize=5;

export const ItemCardsHook = React.memo(function  (props) {
//export const ItemCardsHook = (props) => {
    const {items}=props
    const [SearchText, setSearchText] = useState('')
    const changeSearchText=useCallback((value)=>{
      setSearchText(value)
    },[SearchText])
    
      const [reducer]=dynamicListHooks(items,'title',6)
        
          const [state, dispatch] = useReducer(reducer, initialState)
          //alert(state)
        const ActionDispatcher=useCallback(()=>{
          if(items.length===state.ItemList.length) return
          //dispatch({type:"ADDING_ITEM"})
          //setTimeout(() => {  
             dispatch({type:"ADD_ITEM"}); 
           //}, 10);
          
        },[state])
    const ActionDispatcherSearch=()=>{
        if(SearchText.length>3){            
            dispatch({type:'SEARCH_ITEM',payload:{searchtext:SearchText}})
        }else if(SearchText.length==0){
            dispatch({type:'ITEM_RESTORE'})
        }
    }
 useEffect(() => {
   //console.log('in use effect ActionDispatcher')
    ActionDispatcher()
     return () => {
         
     }
 }, [])
 useEffect(() => {
  //console.log('in use effect ActionDispatcherSearch')
    ActionDispatcherSearch()
     return () => {}
 }, [SearchText])
 //console.log("Parent Item remdered")  
 const classes=CardListStyle() 
    return (
      <Container>
      <Typography variant={"h3"} className={classes.cardtitle}>Movies List</Typography>
  
        <Grid container spacing={1} > 
            <Grid item xs={12} sm={6} md={6}>
                <TextField label="" variant="outlined" size="small"
                 fullWidth={true} placeholder='Enter Search Text' value={SearchText} 
                 onChange={(e)=>{changeSearchText(e.target.value)}}
                 InputProps={{
                    endAdornment: <InputAdornment position="end">
                      {SearchText.length>0?<CloseIcon onClick={()=>setSearchText('')} style={{color:grey[400]}}/>:<div/>}
                    
                  </InputAdornment>
                  }}/>
            </Grid>
        </Grid>
        <Grid container spacing={1} >           
        {state.ItemList.map((item,index)=>(<ItemCard key={item.id+'_'+item.title} item={item} interval={index}/>))}
        {state.hasMore?<Grid item xs={12} sm={12} md={12}><Paper style={{textAlign:'center',color:blue[400]}} onClick={ActionDispatcher}><NavigateBeforeIcon/><NavigateBeforeIcon/>more<NavigateNextIcon/><NavigateNextIcon/></Paper></Grid>:null}
        </Grid>
        </Container>
    )
})

const ItemCard = React.memo(function  ({item,interval}) {
    const [id,setId] =useState('')
    //const [checked,setChecked]=useState(false)
    const classes=CardListStyle()
    let x=interval*50
    if(x.toString().length===4)
            x=x/5
     if(x.toString().length===5)    
        x=x/100   
//console.log("child Item remdered - "+item.itemtext)


    return(<Fragment>
        
        {id!=''?<Redirect push to={'/moviedetails?_id='+id} />:null}
          
          
      <Grid item xs={12} sm={12} md={4}>
      <Zoom in={true} style={{ transitionDelay: (x)}} ref={null}
      >
        <Paper style={{marginTop:0,padding:10,margin:5}} elevation={5} onClick={()=>setId(item.id)}>
        <Grid container >
        <Grid item xs={12} sm={12} >
        <CardActionArea>
          
        <CardMedia className={classes.cardimage} height={700}  component="img" 
        alt={item.title} src={require("../../asset/img/"+item.poster).default} 
        title={item.title} />

        
        </CardActionArea>
          <Typography variant={"h4"} className={classes.cardtitle}>{item.title }</Typography>
          <Divider/>
          </Grid>
          
          </Grid>
          
          <Grid item  style={{paddingTop:5}} >
          <Typography style={{fontSize:'1.2rem',overflow: 'hidden',color:grey[600]}} wrap="nowrap">IMDB Rating : {item.imdbRating }</Typography>
          </Grid>
          <Grid item  style={{paddingTop:5}} >
          <Typography style={{fontSize:'1.2rem',overflow: 'hidden',color:grey[600]}} wrap="nowrap">Casting : {item.actors.join(' | ') }</Typography>
          </Grid>
          <Grid container spacing={0} style={{paddingTop:5}}>
              <Grid item xs={7} sm={9}>
                <Typography style={{fontSize:'1.2rem',color:grey[600]}}>Duration : {item.duration.substring(2,item.duration.length) }</Typography>
              </Grid>
              <Grid item  xs={5} sm={3}  >
                {item.imdbRating<=5?
                (<Typography style={{padding:'5',textAlign:'center',color:grey[50],fontSize:'1.4rem',background:red[300],borderRadius:20}}>Can Ingnore</Typography>):''}
              {item.imdbRating>5 && item.imdbRating<7 ?(<Typography style={{padding:'5',textAlign:'center',color:grey[50],fontSize:'1.4rem',background:orange[300],borderRadius:20}}>Can Watch</Typography>):''}
              {item.imdbRating>=7?(<Typography style={{padding:'5',textAlign:'center',color:grey[50],fontSize:'1.4rem',background:green[300],borderRadius:20}}>watch</Typography>):''}
              </Grid>
          </Grid>
          </Paper>
         </Zoom>
          </Grid>
    
    </Fragment>)
})





