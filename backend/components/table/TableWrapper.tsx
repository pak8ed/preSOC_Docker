"use client";

import { FunnelIcon, UserPlusIcon } from "@/public/svgs";
import { Table } from ".";
import ActionsBarContainer from "../ActionsBarContainer";
import SubContainer from "../SubContainer";
import { ActionsBar } from "../adherents/actions-bar";
import { Button } from "../ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { initHeaders } from "@/lib/utils";
import { SelectColumns } from "./SelectColumns";

interface TableProps {
  children: React.ReactNode;
  data: any[];
}

export const TableWrapper = ({ data, children }: TableProps) => {
  const pathname = usePathname();

  const keys = Object.keys(data[0]);
  const nonDisplayableHeaders = ["id", "adherentId", "nom_naissance"];
  const allHeaders: string[] = keys.filter(
    (str) => !nonDisplayableHeaders.includes(str)
  );

  const [headers, setHeaders] = useState<string[]>(initHeaders(pathname));

  return (
    <div className="w-full h-full">
      <ActionsBarContainer>
        <div>{children}</div>
        <div className="flex gap-4">
          <SelectColumns {...{ allHeaders, headers, setHeaders }} />
          <Button>
            <FunnelIcon height={24} width={24} />
            Filtres
          </Button>
        </div>
      </ActionsBarContainer>
      <SubContainer className="justify-center">
        <Table data={data} headers={headers} />
      </SubContainer>
    </div>
  );
};
