import React from 'react'
import './app.scss';

import Menu from './components/menu/Menu'
import Shop from './components/shop/Shop'

import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import SignInAndSignUp from './components/signing-in-up/SignInAndUp'
import {auth} from './firebase/firbase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth =null;
  
  componentDidMount(){
    auth.onAuthStateChanged(user =>this.setState({currentUser:user}))
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch> 
            <Route exact path='/' component={Menu} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/sign' component={SignInAndSignUp} />
        </Switch>
  
      </div>
    );
  }
 
}

export default App;
