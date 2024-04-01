export default function Textarea({ className, ...rest }) {
  return (
    <textarea
      className={`border-2 rounded-md border-gray-500 ${className}`}
      {...rest}
    ></textarea>
  );
}
