export default function Image({src, alt ,className}){
    return <img
    className={`w-full ${className}`}
    src={src}
    alt={`${alt}`}
  />
}