import './app.scss';
import Menu from './components/menu/Menu'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch> 
          <Route path='/' component={Menu} />
      </Switch>

    </div>
  );
}

export default App;
