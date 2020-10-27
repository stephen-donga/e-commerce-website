import './app.scss';
import Menu from './components/menu/Menu'
import Shop from './components/shop/Shop'

import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
          <Route exact path='/' component={Menu} />
          <Route exact path='/shop' component={Shop} />

      </Switch>

    </div>
  );
}

export default App;
