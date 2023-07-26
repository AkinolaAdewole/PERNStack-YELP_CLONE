import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';

function App() {
  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" component={<Home />} />
              <Route path="/restaurants/:id/update" component={<UpdatePage />} />
              <Route path="/restaurants/:id" component={<RestaurantDetailsPage />} />
            </Routes>
    </Router>
    </div>
  );
}

export default App;
