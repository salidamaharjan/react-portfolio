import Tag from "../components/Tag";
import Image from "../components/Image";
import Description from "../components/Description";
export default function Cards({ src, description, alt, tags }) {
  return (
    <>
      <div className="max-w-[300px] max-h-[400px] rounded overflow-hidden shadow-lg">
        <Image src={src} alt={`${alt}`} />
        <Description>{description}</Description>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </div>
      </div>
    </>
  );
}
