import foodAndRecipe from "../assets/images/foodAndRecipe.png";
import expensesTracker from "../assets/images/expensesTracker.png";
import weatherDashboard from "../assets/images/weatherDashboard.png";
import textEditor from "../assets/images/textEditorPWA.png";
import employeeTracker from "../assets/images/employeeTracker.png";
import noteTaker from "../assets/images/noteTaker.png";

import Cards from "../components/Cards";
export default function Portfolio() {
  return (
    <div className="grid grid-cols-3 gap-8 p-10">
      <a href="https://salidamaharjan.github.io/food-and-recipe/">
        <Cards
          className="h-[100%]"
          src={foodAndRecipe}
          title={`Food and Recipes App`}
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aut eum rerum debitis soluta id harum perspiciatis quae esse adipisci, sapiente a aliquid quia, velit autem voluptatum nostrum minima possimus. `}
          alt={"Food and Recipes App"}
          tags={["#HTML, CSS, JavaScript", "#BULMA", "Shields.io", "#EDAMAM"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/expenses-tracker">
        <Cards
          className="h-[100%]"
          src={expensesTracker}
          title={`Expenses Tracker App `}
          description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!`}
          alt={"Expenses Tracker App"}
          tags={[
            "#HTML, CSS, JavaScript",
            "#Chart.JS",
            "#Handlebars.js",
            "#BULMA", "#Heroku"
          ]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/weather-dashboard-challenge-06?tab=readme-ov-file">
        <Cards
          className="h-[100%]"
          src={weatherDashboard}
          title={`Weather Dashboard App`}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!"
          }
          alt={"Weather Dashboard App"}
          tags={["#BULMA", "#Weather API", "#Geocoder API"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/PWA-text-editor-19/blob/main/asset/image/JATE.png">
        <Cards
          className="h-[100%]"
          src={textEditor}
          title={`PWA Text Editor`}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!"
          }
          alt={"PWA Text Editor"}
          tags={["#WebPack", "#WorkBox", "#IndexedDB"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/employee-tracker-sql">
        <Cards
          className="h-[100%]"
          src={employeeTracker}
          title={`Employee Tracker SQL`}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!"
          }
          alt={"Employee Tracker SQL"}
          tags={["#MySQL2", "#Inquirer", "#Node.js"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/employee-tracker-sql">
        <Cards
          className="h-[100%]"
          src={noteTaker}
          title={`Note Take Express.js`}
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, expedita voluptatum facilis quo aliquid soluta illum laborum nihil ipsa voluptatibus repellendus, facere quasi quos blanditiis beatae ipsum cumque voluptas dolor!"
          }
          alt={"Note Take Express.js"}
          tags={["#Express.js", "#Node.js", "#Heroku"]}
        />
      </a>
    </div>
  );
}
