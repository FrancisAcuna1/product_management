import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Transaction from "./pages/transaction";
import Report from "./pages/Report";
import { useState } from "react";
// import Dash from './components/dash';
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";




function App() {
  // const [newcatlist, setNewCatList] = useState([]);
  // const newsendarray = (arrayfromcategory) => {
  //   setNewCatList(arrayfromcategory);
  // };

  // const [newprodlist, setNewProdList] = useState([]);
  // const newsendprodarray = (arrayfromprod) => {
  //   setNewProdList(arrayfromprod);
  // };


  return (
    <>
      <div style={{height: "100vh", backgroundColor: "whitesmoke"}}>
        <Navbar/>
        <Dashboard/>  
      </div>
     
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home arraycateg={newcatlist} arrayprod={newprodlist} />} />
          <Route path="/product" element={<Product arraycateg={newcatlist} sendprodarray={newsendprodarray}/>} />
          <Route path="/category" element={<Category sendarray={newsendarray} />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
