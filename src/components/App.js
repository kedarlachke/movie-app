import React, { Fragment } from 'react';
 import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import {ItemCardsHook} from './hooks/ItemCardsHook'
import Home from './Home';
import Loading from './Loading';
import Itemdetails from './hooks/Itemdetails'
const items=require('../asset/json/movies-in-theaters.json')


// const AsyncDynamicPAge = importedComponent(
//   () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
//   {
//     LoadingComponent: Loading
//   }
// );
// const AsyncNoMatch = importedComponent(
//   () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
//   {
//     LoadingComponent: Loading
//   }
// );

const App = () => {
  return (
    <Fragment>
    {/* <ItemCardsHook items={items}/> */}
    <Router>
      <Switch>
      <Route
                key={100}
                path={"/moviedetails"}
                exact={true}
                children={<Itemdetails items={items}/>}
      />
      <Route
                key={101}
                path={"/"}
                exact={true}
                children={<ItemCardsHook items={items}/>}
              />
    
    
    </Switch>
    </Router>
    </Fragment>
     


    //   {/* <Router> <div style={{background:"#fefefe"}}>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/dynamic" component={AsyncDynamicPAge} />
    //       <Route component={AsyncNoMatch} />
    //     </Switch>
    //   </div> */}
    // </Router>
  );
};

export default App;
