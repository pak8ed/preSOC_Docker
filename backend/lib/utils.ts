import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defaultHeadersAdherent = [
  "nom",
  "prenom",
  "code_adherent",
  "email",
  "tel",
  "section_academique",
  "qualite",
  "corps",
];
const defaultHeadersSympathisant = [
  "nom",
  "prenom",
  "email",
  "tel",
  "section_academique",
  "qualite",
  "corps",
];
const defaultHeadersAdhesion = [
  "nom",
  "prenom",
  "section_academique",
  "annee",
  "statut",
];

export const initHeaders = (pathname: string) => {
  return pathname.includes("adherent")
    ? defaultHeadersAdherent
    : pathname.includes("sympathisant")
    ? defaultHeadersSympathisant
    : defaultHeadersAdhesion;
};
