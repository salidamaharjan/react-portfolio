import Tag from "../components/Tag";
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
            <p className="text-gray-700 text-base"></p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Tag>#Javascript, CSS, HTML</Tag>
            <Tag>#Bulma</Tag>
            <Tag>#Edamam</Tag>
          </div>
        </div>
      </a>
    </div>
  );
}
