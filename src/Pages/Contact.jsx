import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
export default function Contact() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-2 p-3 max-w-md flex-1">
        <h2 className="pt-3 font-bold text-2xl">Contact</h2>
        <Label className="flex flex-col gap-2">
          Name: <Input type={"text"} />{" "}
        </Label>
        <Label className="flex flex-col gap-2">
          Email Address: <Input type={"text"} />{" "}
        </Label>
        <Label className="flex flex-col gap-2">
          Message: <Textarea />{" "}
        </Label>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
