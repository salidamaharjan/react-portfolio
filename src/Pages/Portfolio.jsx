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
      <a href="https://github.com/salidamaharjan/food-and-recipe">
        <Cards
          className="h-[100%]"
          src={foodAndRecipe}
          title={`Food and Recipes App`}
          description={`This app allows users to search an ingredient, receive the nutrition information and recipes. Users can save recipes to their favorites.`}
          alt={"Food and Recipes App"}
          tags={["#HTML, CSS, JavaScript", "#BULMA", "Shields.io", "#EDAMAM"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/expenses-tracker">
        <Cards
          className="h-[100%]"
          src={expensesTracker}
          title={`Expenses Tracker App `}
          description={`This app allows the user to add the expenses and track it. The expenses trend can be seen in the line graph and pie chart.`}
          alt={"Expenses Tracker App"}
          tags={[
            "#HTML, CSS, JavaScript",
            "#Chart.JS",
            "#Handlebars.JS",
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
            "This app shows the weather for the current day and upto next 5 days. Data is retrieved from open weather API."
          }
          alt={"Weather Dashboard App"}
          tags={["#BULMA", "#Weather API", "#Geocoder API"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/PWA-text-editor-19">
        <Cards
          className="h-[100%]"
          src={textEditor}
          title={`PWA Text Editor`}
          description={
            "This app can be used offline and is downloadable. User can add text, edit and save them."
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
            "The user can view all the employee from DB, add employee, update role, manager and view the budget stored in DB. User can delete the data as well."
          }
          alt={"Employee Tracker SQL"}
          tags={["#MySQL2", "#Inquirer", "#Node.JS"]}
        />
      </a>
      <a href="https://github.com/salidamaharjan/note-taker-express-js">
        <Cards
          className="h-[100%]"
          src={noteTaker}
          title={`Note Taker Express.JS`}
          description={
            "The user can use this app to create a note, edit, delete and save according to work plan."
          }
          alt={"Note Taker Express.js"}
          tags={["#Express.js", "#Node.js", "#Heroku"]}
        />
      </a>
    </div>
  );
}
