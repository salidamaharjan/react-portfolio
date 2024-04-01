import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
import { useState } from "react";
export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function validateForm() {
    let isValid = true;
    const newErrors = {};
    if (!contactData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!contactData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!contactData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  function handleBlur(){
    validateForm();
  }

  return (
    <div className="flex justify-center bg-gray-300">
      <form className="flex flex-col gap-2 pt-8 max-w-md flex-1" onBlur={handleBlur}>
        <h2 className="pt-6 font-bold text-2xl">Contact</h2>
        <Label className="flex flex-col gap-2">
          Name <Input type={"text"} />
        </Label>
        <Label className="flex flex-col gap-2">
          Email Address <Input type={"text"} />
        </Label>
        <Label className="flex flex-col gap-2">
          Message <Textarea />
        </Label>
        <Button className="self-start">Submit</Button>

        <div></div>
      </form>
    </div>
  );
}
