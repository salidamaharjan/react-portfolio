export default function Label({ labelName, htmlFor }) {
  return <> <label htmlFor={htmlFor}>{labelName}
  </label>
  <input className="border-2 border-gray-500"type="text"/>
  </>
}
