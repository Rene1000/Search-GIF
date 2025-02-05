import { useState } from "react";
import {AddCategory, GifGrid}  from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Arcane", "Attack on titan"]);

  const onAddCategory = (event) => {
    if(categories.includes(event))return;
    setCategories([event, ...categories]);
  };
  return (
    <>
      <h1>Gif expert App</h1>
      <AddCategory onNewCatgory={(event)=>onAddCategory(event)} />
        {categories.map((category) => (
              <GifGrid key={category} Category={category}/>
        ))}
    </>
  );
};

export default GifExpertApp;
