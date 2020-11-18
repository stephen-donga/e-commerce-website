import React from 'react'
import './app.scss';

import Menu from './components/menu/Menu'
import Shop from './components/shop/Shop'

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector'

import {Switch, Route,Redirect} from 'react-router-dom'
import Header from './components/header/Header'
import SignInAndSignUp from './components/signing-in-up/SignInAndUp'
import {auth, createUserProfileDocument} from './firebase/firbase.utils'

import Checkout from './components/checkout/Checkout'

class App extends React.Component {

  unsubscribeFromAuth =null;
  
  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        });
        })
      }
      setCurrentUser(userAuth)
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch> 
            <Route exact path='/' component={Menu} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/sign' 
            render={()=> this.props.currentUser ? 
            (<Redirect to='/'/>)
            :
            <SignInAndSignUp />
            } />
             <Route exact path='/checkout' component={Checkout} />
        </Switch>
  
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps, mapDispatchToProps) (App);
