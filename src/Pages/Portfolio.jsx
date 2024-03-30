import foodAndRecipe from "../assets/images/foodAndRecipe.png";
import expensesTracker from "../assets/images/expensesTracker.png";

import Cards from "../components/Cards";
export default function Portfolio() {
  return (
    <div className="flex flex-col gap-4">
      <a href="https://salidamaharjan.github.io/food-and-recipe/">
        <Cards
          src={foodAndRecipe}
          description={`Food and Recipes App`}
          alt={"Food and Recipes App"}
          tags={["#HTML, CSS, JavaScript", "#BULMA", '#EDAMAM']}
        />
      </a>
      <a href="https://github.com/salidamaharjan/expenses-tracker">
        <Cards
          src={expensesTracker}
          description={`Expenses Tracker App`}
          alt={"Expenses Tracker App"}
          tags={["#HTML, CSS, JavaScript", "#Chart.JS", "BULMA"]}
        />
      </a>
    </div>
  );
}
