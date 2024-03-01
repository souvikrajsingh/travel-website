import React from "react";
import { Button } from "@nextui-org/react";

export default function Buttons({ buttonName }) {
  return (
    <Button
      radius="full"
      className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg px-5 py-2 m-2"
    >
      {buttonName}
    </Button>
  );
}
