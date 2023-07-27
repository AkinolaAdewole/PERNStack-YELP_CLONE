import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import RestaurantContextProvider from './ContextApi/RestaurantContextProvider';

function App() {
  return (
      <RestaurantContextProvider>
        <div className='container'>
                <Router>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/restaurants/:id/update" element={<UpdatePage />} />
                      <Route path="/restaurants/:id" element={<RestaurantDetailsPage />} />
                    </Routes>
                </Router>
         </div>
      </RestaurantContextProvider>
  );
}

export default App;
