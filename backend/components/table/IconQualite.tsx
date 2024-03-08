import React from "react";
import clsx from "clsx";
import { Qualite } from "@prisma/client";

interface Props {
  qualite: Qualite;
}

const IconQualite: React.FC<Props> = ({ qualite }) => {
  return (
    <div
      className={clsx(
        "w-fit py-1 px-2 border rounded-qualite",
        qualite === Qualite.Adherent
          ? "bg-qualite border-good text-good"
          : qualite === Qualite.AncienAdherent
          ? "bg-inactive/10 border-inactive text-inactive"
          : "bg-sympa/30 border-sympa text-sympa"
      )}
    >
      {qualite === Qualite.Adherent
        ? "Adhérent"
        : qualite === Qualite.AncienAdherent
        ? "Ancien Adhérent"
        : "Sympathisant"}
    </div>
  );
};

export default IconQualite;
