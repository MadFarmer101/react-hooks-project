import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  return (
    <div className="App">
      <IngredientForm />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients}/>
      </section>
    </div>
  );
}

export default Ingredients;
