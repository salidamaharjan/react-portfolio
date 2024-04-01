import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
export default function Contact() {
  return (
    <div className="flex justify-center bg-gray-300">
      <form className="flex flex-col gap-2 pt-8 max-w-md flex-1">
        <h2 className="pt-6 font-bold text-2xl">Contact</h2>
        <Label className="flex flex-col gap-2">
          Name <Input type={"text"} />
        </Label>
        <Label className="flex flex-col gap-2">
          Email Address <Input type={"Email"} />
        </Label>
        <Label className="flex flex-col gap-2">
          Message <Textarea />
        </Label>
        <Button className="self-start">Submit</Button>
      </form>
    </div>
  );
}
