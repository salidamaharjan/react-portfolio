export default function Button({ children, className }) {
  return (
    <button className={`border-2 bg-gray-500 text-gray-200 px-4 rounded-md ${className}`}>{children}</button>
  );
}
