import foodAndRecipe from "../assets/images/foodAndRecipe.png";
export default function Portfolio() {
  return (
    <div>
      <a href="https://salidamaharjan.github.io/food-and-recipe/">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={foodAndRecipe}
            alt="Food and Recipe App"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Food and Recipes App</div>
            <p className="text-gray-700 text-base">
              
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Javascript, CSS, HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Bulma
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Edamam
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
