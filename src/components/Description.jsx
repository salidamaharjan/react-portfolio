export default function Description({ children }) {
  return (
    <>
       <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{children}</div>
            <p className="text-gray-700 text-base"></p>
          </div>
    </>
  );
}
