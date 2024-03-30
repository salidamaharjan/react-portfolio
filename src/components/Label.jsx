export default function Label({ children, className}) {
  return <> <label className={`${className} font-bold`} >{children}
  </label>
  </>
}
