"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CreateNew from "../_components/createNew";
import useOpen from "@/hooks/useOpen";

const Create = () => {
  const { open, setOpen } = useOpen();
  return (
    <div className="grid place-items-center h-full">
      {!open ? (
        <div className="flex flex-col justify-center items-center gap-y-4 text-xl">
          <p>Start new campaign</p>
          <Button
            variant={"primary"}
            className="flex items-center gap-x-2 w-36 text-lg"
            onClick={() => setOpen(true)}
          >
            <PlusCircle className="w-5 h-5" />
            Create
          </Button>
        </div>
      ) : (
        <CreateNew />
      )}
    </div>
  );
};

export default Create;
