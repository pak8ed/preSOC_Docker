import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";

interface NavItemProps {
  children: React.ReactNode;
  name: string;
  idx: number;
  activeLink: number;
  setActiveLink: React.Dispatch<React.SetStateAction<number>>;
  href: string;
  pathname: string;
}

export const NavItem = ({
  children,
  name,
  href,
  idx,
  activeLink,
  setActiveLink,
  pathname,
}: NavItemProps) => {
  useEffect(() => {
    if (pathname.includes(href)) {
      setActiveLink(idx);
    }
  }, [pathname, href, idx, setActiveLink]);

  return (
    <Link
      onClick={() => setActiveLink(idx)}
      href={href}
      className={clsx(
        "h-[104px] w-full p-4 rounded-[10px] flex flex-col justify-center items-center gap-3 text-base font-bold text-accent hover:text-white hover:bg-accent transition-all",
        activeLink === idx && "border border-accent bg-mainFocus shadow-nav"
      )}
    >
      <div className="h-9 w-9">{children}</div>
      <h2>{name}</h2>
    </Link>
  );
};
