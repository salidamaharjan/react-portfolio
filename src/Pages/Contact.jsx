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

  function validateName() {
    if (!contactData.name) {
      setErrors((previousState) => {
        return {
          ...previousState,
          name: "Name is required",
        };
      });
      return;
    }
    delete errors["name"];
    setErrors(errors);
  }

  function validateMessage() {
    if (!contactData.message) {
      setErrors((previousState) => {
        return {
          ...previousState,
          message: "Message is required!",
        };
      });
      return;
    }
    delete errors["name"];
    setErrors(errors);
  }

  function validateEmail() {
    if (!contactData.email) {
      setErrors((previousState) => {
        return {
          ...previousState,
          email: "Email is required!",
        };
      });
      return;
    }
    if(!/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(contactData.email)){
      setErrors((previousState) => {
        return {
          ...previousState,
          email: "Email is invalid!",
        };
      });
      return;
    }
    delete errors["email"];
    setErrors(errors);
  }

  return (
    <div className="flex justify-center bg-gray-300">
      <form className="flex flex-col gap-2 pt-8 max-w-md flex-1">
        <h2 className="pt-6 font-bold text-2xl">Contact</h2>
        <Label className="flex flex-col gap-2">
          Name{" "}
          <Input
            onBlur={validateName}
            value={contactData.name ?? ""}
            onChange={(e) => {
              setContactData((previousState) => {
                return {
                  ...previousState,
                  name: e.target.value,
                };
              });
            }}
            type={"text"}
          />
        </Label>
        <Label className="flex flex-col gap-2">
          Email Address{" "}
          <Input
            onBlur={validateEmail}
            value={contactData.email ?? ""}
            onChange={(e) => {
              setContactData((previousState) => {
                return {
                  ...previousState,
                  email: e.target.value,
                };
              });
            }}
            type={"text"}
          />
        </Label>
        <Label className="flex flex-col gap-2">
          Message{" "}
          <Textarea
            onBlur={validateMessage}
            value={contactData.message ?? ""}
            onChange={(e) => {
              setContactData((previousState) => {
                return {
                  ...previousState,
                  message: e.target.value,
                };
              });
            }}
          />
        </Label>
        <Button className="self-start">Submit</Button>

        <div className="text-red-600">
          {Object.entries(errors).map(([key, value]) => {
            return <div key={key}>{value}</div>;
          })}
        </div>
      </form>
    </div>
  );
}
