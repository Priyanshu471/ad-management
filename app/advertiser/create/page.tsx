import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const Create = () => {
  return (
    <div className="grid place-items-center h-screen ">
      <div className="flex flex-col justify-center items-center gap-y-4 text-xl">
        <p>Start new campaign</p>
        <Button
          variant={"primary"}
          className="flex items-center gap-x-2 w-36 text-lg"
        >
          <PlusCircle className="w-5 h-5" />
          Create
        </Button>
      </div>
    </div>
  );
};

export default Create;
