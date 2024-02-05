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

export function SelectRole() {
  return (
    <Select>
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
          <SelectItem value="cretor">Content Creator</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
