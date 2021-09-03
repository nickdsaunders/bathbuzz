import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <NavBar />
        <NavMenu />
        <Cart />

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
