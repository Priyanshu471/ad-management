import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface SelectRoleProps {
  setRole: (role: "advertiser" | "creator") => void;
}
("w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary");
export function SelectRole({ setRole }: SelectRoleProps) {
  return (
    <Select
      onValueChange={(value: "advertiser" | "creator") => {
        setRole(value);
      }}
    >
      <SelectTrigger className="text-muted-foreground w-full rounded-lg py-7 pl-6 pr-10 border-stroke ">
        <SelectValue
          placeholder="e.g. who are you?"
          className="text-foreground/60 placeholder:text-foreground/20 "
        />
      </SelectTrigger>
      <SelectContent className=" rounded-lg ">
        <SelectGroup>
          <SelectItem value="advertiser" className=" py-2 pl-4 pr-10 text-lg">
            Advertiser
          </SelectItem>
          <SelectItem value="creator" className=" py-2 pl-4 pr-10 text-lg">
            Content Creator
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
