export default function Label({labelName,inputType}){
    return<>
        <label htmlFor={inputType}> {labelName} 
        </label>
    </>
}