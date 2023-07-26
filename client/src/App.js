import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';

function App() {
  return (
    <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/restaurants/:id/update" component={UpdatePage} />
              <Route path="/restaurants/:id" component={RestaurantDetailsPage} />
            </Switch>
    </Router>
    </div>
  );
}

export default App;
