import Label from "../components/Label"
export default function Contact () {
    return <>
    <form>
        <h2>Contact</h2>
        <Label labelName={"Name: "} />
        <Label labelName={"Email Address: "}/>
        <Label labelName={"Message: "} />
    </form> 
    </>
}