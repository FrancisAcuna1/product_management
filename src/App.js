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
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="report" element={<Report />} />
        </Routes>
      </BrowserRouter>
   
    
    </>
  );
}

export default App;
