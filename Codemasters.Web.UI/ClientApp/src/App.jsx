import React from 'react';
import {Route, Switch, Router, Redirect} from 'react-router-dom';
import './assets/sass/core.scss';
import Layout from './containers/Layout';
import Application from './containers/Application';
import { createBrowserHistory } from "history";
import {AppContext} from './context/ApplicationContext';
import Home from './pages/Home';

export const history = createBrowserHistory();

function App() { 
  return (
    <Application>
      <Layout>
        <Router history={history}>
          <Switch>
            <Route exact path="/:country" render={() => 
              <AppContext.Consumer>
                {context => <Home {...context}/>}
              </AppContext.Consumer> 
            } />
            <Redirect to="/uk" />
          </Switch>
        </Router>
      </Layout>      
    </Application>

  );
}

export default App;
