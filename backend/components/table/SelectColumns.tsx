"use client";

import { Dispatch, SetStateAction } from "react";
import _ from "lodash";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SelectColumnsProps {
  allHeaders: string[];
  headers: string[];
  setHeaders: Dispatch<SetStateAction<string[]>>;
}

export const SelectColumns = ({
  allHeaders,
  headers,
  setHeaders,
}: SelectColumnsProps) => {
  const handleCheckedChange = (isChecked: boolean, header: string) => {
    if (isChecked) {
      setHeaders([...headers, header]);
    } else {
      let newHeaders = headers;
      headers.splice(headers.indexOf(header), 1);
      setHeaders([...headers]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Colonnes</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white rounded-qualite">
        <DropdownMenuLabel>Sélectionner colonnes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allHeaders.map((header, idx) => {
          return (
            <DropdownMenuCheckboxItem
              checked={headers.indexOf(header) > -1}
              onCheckedChange={(isChecked) =>
                handleCheckedChange(isChecked, header)
              }
              key={idx}
            >
              {_.capitalize(header.replace("_", " "))}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
