import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products/:category">
            <ProductsList />
          </Route>

          <Route path="/products/:id">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

          <Route path="/register">
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
