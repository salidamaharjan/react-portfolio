import Tag from "../components/Tag";
import foodAndRecipe from "../assets/images/foodAndRecipe.png";
import Image from "../components/Image";
import Description from "../components/Description";
export default function Portfolio() {
  return (
    <div>
      <a href="https://salidamaharjan.github.io/food-and-recipe/">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image src={foodAndRecipe} alt="Food and Recipes App"/>
          <Description>Food and Recipes App</Description>
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
