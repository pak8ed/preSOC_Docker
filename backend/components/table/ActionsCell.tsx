import { Button } from "@/components/ui/button";

import {
  EyeIcon,
  BackspaceIcon,
  PencilSquareIcon,
  EyeIconSolid,
  PencilSquareIconSolid,
  BackspaceIconSolid,
} from "@/public/svgs";
import Link from "next/link";

export interface ActionsCellProps {
  id: string; //Id of the item concerned by the actions
  route: "/adherents" | "/adhesions" | "/sympathisants";
}

export const ActionsCell = ({ id, route }: ActionsCellProps) => {
  const handleClick = (route: ActionsCellProps["route"], id: string) => {
    console.log({ route, id });
  };

  return (
    <div>
      <Button variant="icon" size="icon" className="" asChild>
        <Link
          href={`${route}/details?=${route.substring(1, route.length - 1)}Id`}
          className="[&>*:first-child]:hover:hidden [&>*:last-child]:hidden [&>*:last-child]:hover:block"
        >
          <EyeIcon width={24} height={24} className="" />
          <EyeIconSolid width={24} height={24} className="" />
        </Link>
      </Button>
      <Button variant="icon" size="icon" className="" asChild>
        <Link
          href={`${route}/update?=${route.substring(1, route.length - 1)}Id`}
          className="[&>*:first-child]:hover:hidden [&>*:last-child]:hidden [&>*:last-child]:hover:block"
        >
          <PencilSquareIcon width={24} height={24} className="" />
          <PencilSquareIconSolid width={24} height={24} className="" />
        </Link>
      </Button>
      <Button
        variant="icon"
        size="icon"
        className="[&>*:first-child]:hover:hidden [&>*:last-child]:hidden [&>*:last-child]:hover:block"
        onClick={() => handleClick(route, id)}
      >
        <BackspaceIcon width={24} height={24} className="" />
        <BackspaceIconSolid width={24} height={24} className="" />
      </Button>
    </div>
  );
};
