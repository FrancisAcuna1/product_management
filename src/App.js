import Dashboard  from "./components/dashboard";
import  {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Transaction from "./pages/transaction";
import Report from "./pages/Report";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} ></Route>
          <Route path="product" exact element={<Product />} ></Route>
          <Route path="category" exact element={<Category />} ></Route>
          <Route path="transaction" exact element={<Transaction />} ></Route>
          <Route path="report" exact element={<Report />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
