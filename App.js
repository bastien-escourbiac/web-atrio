import HomePage from "../src/components/HomePage";
import ProductList from "../src/components/ProductList";
import ProductPage from "../src/components/ProductPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import products from "../src/components/fixtures";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/ProductList">
            <ProductList products={products} />
          </Route>
          <Route exact path="/Product/:id">
            <ProductPage products={products} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
