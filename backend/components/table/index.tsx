"use client";

import clsx from "clsx";
import {
  Bars3Icon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  PrinterIcon,
} from "@/public/svgs";
import { ActionsCell, ActionsCellProps } from "./ActionsCell";
import styles from "./table.module.css";
import { Button } from "@/components/ui/button";
import IconQualite from "./IconQualite";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import _ from "lodash";
import { Qualite } from "@prisma/client";

interface TableProps {
  headers: string[];
  data: any[];
}

const handleSorting = (
  sortField: string,
  sortOrder: string,
  data: any[]
): any[] => {
  if (sortField !== "") {
    return [...data].sort((a, b) => {
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
          numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
      );
    });
  }
  return data;
};

export const Table = ({ headers, data }: TableProps) => {
  const pathName = usePathname();
  console.log({ headers });

  const [tableData, setTableData] = useState<any[]>(data);
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"" | "asc" | "desc">("");

  const handleSort = (header: string) => {
    if (header !== sortField || sortOrder === "") {
      //New header or sort not currently in use : sort original data in ascending order
      setSortField(header);
      setSortOrder("asc");
      setTableData(handleSorting(header, "asc", data));
    } else {
      if (sortOrder === "asc") {
        //Column already sorted in ascending order : sort original data in descending order
        setSortOrder("desc");
        setTableData(handleSorting(header, "desc", data));
      } else {
        //Column already sorted in ascending order : use original data again
        setSortField("");
        setSortOrder("");
        setTableData(data);
      }
    }
  };

  return (
    <div
      className={clsx(
        "border-2 border-opacity-70 fit-content border-accent rounded-std overflow-hidden"
      )}
    >
      <table
        className={clsx(
          "block max-w-[calc(100vw-236px-22px-20px-4px)] max-h-[calc(732px-74px-24px-4px)] overflow-x-auto overflow-y-auto whitespace-nowrap table-auto",
          styles.hideScrollbar
        )}
      >
        <thead className="bg-mainFocus text-accent font-bold h-14 sticky top-0 z-10 shadow-tableHeader">
          <tr>
            {headers.map((header, idx) => {
              return (
                <th
                  scope="col"
                  className={clsx(
                    "text-left p-3",
                    // styles.innerShadowBottom,
                    idx === 0 && "sticky left-0 z-[1] bg-mainFocus",
                    idx === headers.length - 1 &&
                      "sticky right-0 z-[1] bg-mainFocus"
                  )}
                  key={idx}
                  onClick={() => handleSort(header)}
                >
                  <div className="flex gap-2 items-center justify-between">
                    <div className="gap-2 flex items-center">
                      {idx === 0 && (
                        <input
                          className=""
                          type="checkbox"
                          aria-label="selectionner"
                        />
                      )}
                      {_.capitalize(header.split("_").shift())}
                    </div>
                    {header !== sortField ? (
                      <BarsArrowDownIcon height={16} width={16} />
                    ) : sortOrder === "asc" ? (
                      <BarsArrowUpIcon height={16} width={16} />
                    ) : (
                      <Bars3Icon height={16} width={16} />
                    )}
                  </div>
                </th>
              );
            })}
            {/* ActionsCell */}
            <th
              scope="col"
              className={clsx(
                "text-left p-3 sticky right-0 z-[1] bg-mainFocus"
              )}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white font-medium divide-y">
          {tableData.map((row_data, idx) => {
            return (
              <tr className="h-12 [&>*]:p-3 [&>*]:hover:bg-mainFocus" key={idx}>
                {headers.map((header, idx) => {
                  return (
                    <td
                      key={idx}
                      scope="row"
                      className={clsx(
                        idx === 0 && "sticky left-0 bg-white z-[1]"
                      )}
                    >
                      {idx === 0 ? (
                        <div className="flex flex-row items-center gap-2">
                          <input type="checkbox" aria-label="selectionner" />
                          {row_data.nom}
                        </div>
                      ) : header === "qualite" ? (
                        <IconQualite qualite={row_data[header] as Qualite} />
                      ) : (
                        row_data[header]
                      )}
                    </td>
                  );
                })}
                <td scope="row" className="sticky right-0 bg-white z-[1]">
                  <ActionsCell
                    id={row_data.id}
                    route={pathName as ActionsCellProps["route"]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-mainFocus text-accent font-bold shadow-tableFooter sticky bottom-0 z-[1]">
          <tr className="h-16">
            <td
              colSpan={Math.ceil((headers.length + 1) / 2)}
              className={clsx("sticky left-3")}
            >
              <Button disabled={true}>
                <PrinterIcon width={24} height={24} /> Exporter selection
              </Button>
            </td>
            <td
              colSpan={Math.ceil((headers.length + 1) / 2)}
              className={clsx("sticky right-8 text-right font-medium")}
            >
              {data.length}{" "}
              {pathName === "/adherents"
                ? "Adhérents"
                : pathName === "/adhesions"
                ? "Adhésions"
                : "Sympathisants"}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
