// CommonParent.js
import React, { useState } from 'react';
import Products from './pages/Product';
import Category from './pages/Category';

const CommonParent = ({ initialProducts }) => {
  const [productsList, setProductsList] = useState(initialProducts);

//   const addProduct = (newProduct) => {
//     setProducts([...products, { ...newProduct, id: Date.now() }]);
//   };

const DelCateg = (value) => {
    setProductsList(productsList.filter((product) => product.value !== value));
  };
  

  const UpdCateg = (updatedProduct) => {
    setProductsList((prevProducts) =>
      prevProducts.map((product) => (product.value === updatedProduct.value ? updatedProduct : product))
    );
  };

  return (
    <div>
    <Category
        UpdCateg={UpdCateg}
        DelCateg={DelCateg}
    />

      {/* <StocksManagement products={products} setProducts={setProducts} /> */}
    </div>
  );
};

export default CommonParent;