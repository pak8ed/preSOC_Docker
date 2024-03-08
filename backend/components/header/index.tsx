"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { NotificationBell } from "./NotificationBell";
import { SearchBar } from "./SearchBar";
import { UserButton } from "./UserButton";

// interface HeaderProps {
//   title: string;
// }
const dict = {
  "/dashboard": "Tableau de bord",
  "/academies": "Académies",
  "/adherents": "Adhérents",
  "/adherents/": "Adhérent",
  "/adhesions": "Adhésions",
  "/analytics": "Analytics",
  "/sympathisants": "Sympathisants",
};

type dictKey = keyof typeof dict;

const getTitle = (pathname: dictKey): string => {
  const regex = /\/([^/]+)\//;
  const match = pathname.match(regex);
  if (match && match.length > 1) {
    if (match[1] === "adherents") {
      return "Adhérent";
    }
    if (match[1] === "sympathisants") {
      return "Sympathisant";
    }
    if (match[1] === "academies") {
      return "Académie";
    }
    return match[1];
  }
  if (Object.keys(dict).includes(pathname)) {
    return dict[pathname];
  }
  return "Page Inconnue";
};

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="bg-body z-10 w-full h-[101px] py-6 flex flex-row justify-between items-center text-accent fixed top-0">
      <div className="flex items-center justify-center min-w-[236px]">
        <Image
          src={logo}
          alt={"Logo du syndicat SNCL"}
          width={84}
          height={47}
          className=""
        />
      </div>

      <div className="w-full flex flex-row justify-between items-center px-8">
        <h1 className="text-3xl font-bold">{getTitle(pathname as dictKey)}</h1>
        <div className="flex flex-row gap-4 items-center">
          <SearchBar />
          <NotificationBell />
          <UserButton />
        </div>
      </div>
    </div>
  );
};
