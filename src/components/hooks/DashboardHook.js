import React, { useState,Fragment,useRef,useEffect } from 'react'
import {OutLinedInput,FabButtons,FilterMenu,FabBacktotop} from '../commonUI'
import {Grid, Container,Paper,Box,Typography,Divider,Button,Link}  from '@material-ui/core';
import {red,green,grey,blue,cyan,orange} from '@material-ui/core/colors'
import {ContainerStyle} from '../Commoncss'
import ItemCardsHook from '..hooks/ItemCardsHook'

import '../../App.css'


const  classes={
    selected:{border: '2px solid #00bcd4',padding:5,borderRadius:20,color:cyan[500],maxWidth:150,minWidth:100,textAlign:'center',fontWeight:'500'},
 notselected:{border: '1px solid #ABB2B9',padding:5,borderRadius:20,color:'#ABB2B9',maxWidth:150,minWidth:100,textAlign:'center',marginBottom:5}
}
export const DashboardHook = () => {
  const classes1=ContainerStyle()
   const [transaction, setTransaction] = useState("Items")
   const [isSticky, setSticky] = useState(false);
   const ref = useRef(null);
   const handleScroll = () => {
     
     if (ref.current) {
      //console.log(ref.current)
       setSticky(ref.current.getBoundingClientRect().top <= 0);
     }
   };
 
   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', () => handleScroll);
     };
   }, []);

    return (
        
    <Fragment   >
      <div m={1} p={1}   className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
      <Grid container className="sticky-inner" style={{backgroundColor:'#fff'}}>
        
          
   
          
          
          
      
      <Grid item md={12} sm={12} xs={12}> 
    <div  style={{display:"flex",justifyContent:"center",backgroundColor:'#fefefe'}}>
    
    <Link href="#" style={transaction=='Items'?classes.selected:classes.notselected} 
    onClick={()=>{setTransaction('Items')}} >Items</Link>
    <Link href="#" style={transaction=='Parties'?classes.selected:classes.notselected} onClick={()=>{setTransaction('Parties')}}> 
    Parties</Link>
    <Link href="#" style={transaction=='Invoice'?classes.selected:classes.notselected}
    onClick={()=>{setTransaction('Invoice')}}>Invoice</Link>
    </div>
    </Grid>
    </Grid>
    </div> 
    <Container maxWidth={false} className={classes1.container}>
    <Paper style={{padding:5}} elevation={1}>
     
    
     {transaction=='Items'?<Fragment> 
    {/* <OutLinedInput lbltext='Enter search text'  section={'searchtext'}  sm={10} xs={10} md={6} multiline rows={1} size="small"/> */}
    <ItemCardsHook/><FabButtons /></Fragment>:''}
    {transaction=='Parties'?<Fragment>
    {/* <OutLinedInput lbltext='Enter search text'  section={'searchtext'}  sm={10} xs={10} md={6} multiline rows={1} size="small"/> */}
     <div>party</div>
     <FabButtons /></Fragment>:''}
    {transaction=='Invoice'?<Fragment>
    {/* <OutLinedInput lbltext='Enter search text'  section={'searchtext'}  sm={10} xs={10} md={6} multiline rows={1} size="small"/> */}
    <div>Invoice</div>
    <FabButtons /></Fragment>:''} 
     </Paper> 
     </Container>
  </Fragment>
    )
    
}


