import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Navigation</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <h1>Footer</h1>
      </Router>
    </div>
  );
}

export default App;
