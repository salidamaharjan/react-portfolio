import Label from "../components/Label";
import Input from "../components/Input"
export default function Contact() {
  return (
    <>
      <form>
        <h2>Contact</h2>
        <Label>Name: <Input type={"text"}/> </Label>
        <Label>Email Address: <Input type={"text"}/> </Label>
        <Label>Message: <Input type={"text"}/> </Label>
      </form>
    </>
  );
}
