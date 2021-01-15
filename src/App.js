import logo from './logo.svg';
import './App.css';

import {Provider} from "react-redux";
import {store} from './redux/store/store';

import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';


import ProfileContainer from './containers/ProfileContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ProfileContainer />
     </div>
    </Provider>
  );
}

export default App;
