import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import AdminHome from './AdminHome';
import UserHome from './userSummary/userHome';
import TransferFund from './FundTransfer/FundTransfer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getUserData = (data, props) => {
    this.setState({ data });
    if (data.role === "admin") {
      props.history.push('/adminHome');
    } else {
      props.history.push('/userHome');
    }
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" render={()=> <Home getUserData={this.getUserData} />}/>
            <Route path="/adminHome" render={() => <AdminHome data={this.state.data}/> } />
            <Route path="/userHome" render={() => <UserHome data={this.state.data}/> } />
            <Route path="/fundTransfer" component={TransferFund} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
