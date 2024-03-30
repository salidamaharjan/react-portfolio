import foodAndRecipe from "../assets/images/foodAndRecipe.png";
import expensesTracker from "../assets/images/expensesTracker.png";
import weatherDashboard from "../assets/images/weatherDashboard.png";

import Cards from "../components/Cards";
export default function Portfolio() {
  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      <a href="https://salidamaharjan.github.io/food-and-recipe/">
        <Cards
          className="h-[100%]"
          src={foodAndRecipe}
          title={`Food and Recipes App`}
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aut eum rerum debitis soluta id harum perspiciatis quae esse adipisci, sapiente a aliquid quia, velit autem voluptatum nostrum minima possimus.`}
          alt={"Food and Recipes App"}
          tags={["#HTML, CSS, JavaScript", "#BULMA", "#EDAMAM"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/expenses-tracker">
        <Cards
          className="h-[100%]"
          src={expensesTracker}
          title={`Expenses Tracker App `}
          description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!`}
          alt={"Expenses Tracker App"}
          tags={["#HTML, CSS, JavaScript", "#Chart.JS", "BULMA"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/weather-dashboard-challenge-06?tab=readme-ov-file">
        <Cards
          className="h-[100%]"
          src={weatherDashboard}
          title={`Weather Dashboard App`}
          description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!"}
          alt={"Weather Dashboard App"}
          tags={["#HTML, CSS, JavaScript", "BULMA"]}
        />
      </a>
    </div>
  );
}
