import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CollectionsPage from './pages/CollectionsPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:handle" component={ProductPage} />
          <Route path="/collections" component={CollectionsPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
