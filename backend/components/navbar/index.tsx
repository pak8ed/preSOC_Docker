"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import clsx from "clsx";
import { NavItem } from "./NavItem";
import {
  HomeIcon,
  HandThumbUpIcon,
  IdentificationIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
} from "@/public/svgs";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = ({ className }: { className: string }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<number>(-1);

  return (
    <nav className={clsx("flex items-center justify-center", className)}>
      <div className="flex flex-col gap-4 bg-white p-[14px] rounded-std shadow-nav w-[194px]">
        <NavItem
          name="Tableau de bord"
          idx={0}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/dashboard"
          pathname={pathname}
        >
          <HomeIcon />
        </NavItem>
        <NavItem
          name="Adhérents"
          idx={1}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/adherents"
          pathname={pathname}
        >
          <UserGroupIcon />
        </NavItem>
        <NavItem
          name="Sympathisants"
          idx={2}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/sympathisants"
          pathname={pathname}
        >
          <HandThumbUpIcon />
        </NavItem>
        <NavItem
          name="Adhésions"
          idx={3}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/adhesions"
          pathname={pathname}
        >
          <IdentificationIcon />
        </NavItem>
        <NavItem
          name="Académies"
          idx={4}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/academies"
          pathname={pathname}
        >
          <BuildingLibraryIcon />
        </NavItem>
        <NavItem
          name="Analytics"
          idx={5}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          href="/analytics"
          pathname={pathname}
        >
          <ChartBarIcon />
        </NavItem>
      </div>
    </nav>
  );
};
