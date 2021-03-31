import React, {Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import UserList from './components/UserListComponent';
const store = ConfigureStore();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <Provider store={store}>
          <div  className="app-style">
            <BrowserRouter>
              <UserList/>
            </BrowserRouter>
          </div>
      </Provider>
      
    );
  }

}

export default App;