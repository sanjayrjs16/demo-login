import logo from './logo.svg';
import './App.css';

import {Provider} from "react-redux";
import {store} from './redux/store/store';

import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileContainer from './containers/ProfileContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Router>
        <Switch>
         
          <PublicRoute component={LoginComponent} path="/" exact />
          <PrivateRoute component={DashboardComponent} path="/dashboard" exact />
        </Switch>  
      </Router>  */}
      <ProfileContainer />
     </div>
    </Provider>
  );
}

export default App;
