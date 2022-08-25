import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsList />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/pay" element={<Pay/>} /> */}
          <Route exact path="/success" element={<Success />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate replace to={"/"} /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate replace to={"/"} /> : <Register />}
          />
          {/* <Route exact path="/register" {... user ? <Navigate to={"/"} : element={<Login />}}  /> */}
          {/* <Route path="/login" {...(user ? <Navigate to="/" /> : element={<Product />}  )} /> */}
          {/* <Route path="/register" element={user ? {<Home />} : {<Register />} }/> */}

          {/* <Route exact path="/">
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

          <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>

          <Route path="/register">
            <Route path="/login">
              {user ? <Navigate to="/" /> : <Register />}
            </Route>
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
