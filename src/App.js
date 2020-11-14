import React from 'react'
import './app.scss';

import Menu from './components/menu/Menu'
import Shop from './components/shop/Shop'

import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import SignInAndSignUp from './components/signing-in-up/SignInAndUp'
import {auth, createUserProfileDocument} from './firebase/firbase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth =null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        });
        })
      }
      this.setState({currentUser: userAuth})
    })

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
