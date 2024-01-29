import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

import "./shop.style.scss";
import { useEffect } from "react";


const Shop = () => {
  useEffect(() => {
    document.title = "Shop | Kingsman shop";
  })


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};


export default Shop;