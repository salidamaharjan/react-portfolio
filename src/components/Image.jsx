export default function Image({src, alt}){
    return <img
    className="w-full"
    src={src}
    alt={`${alt}`}
  />
}