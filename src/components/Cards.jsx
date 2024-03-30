import Tag from "../components/Tag";
import Image from "../components/Image";
import Description from "../components/Description";
import Title from "../components/Title";

export default function Cards({
  src,
  title,
  description,
  alt,
  tags,
  className,
}) {
  return (
    <>
      <div
        className={`max-w-sm bg-gray-300 rounded overflow-hidden shadow-lg ${className}`}
      >
        <Image className="min-h-52 max-h-52"src={src} alt={`${alt}`} />
        <div className="px-6 py-4">
          <Title>{title}</Title>
        </div>
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
