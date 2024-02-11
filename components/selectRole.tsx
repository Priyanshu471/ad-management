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
  setRole: (role: "admin" | "advertiser" | "creator") => void;
}
export function SelectRole({ setRole }: SelectRoleProps) {
  return (
    <Select
      onValueChange={(value: "admin" | "advertiser" | "creator") => {
        setRole(value);
      }}
    >
      <SelectTrigger className="">
        <SelectValue
          placeholder="Who are you?"
          className="text-foreground/60 placeholder:text-foreground/20 "
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="advertiser">Advertiser</SelectItem>
          <SelectItem value="creator">Content Creator</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
