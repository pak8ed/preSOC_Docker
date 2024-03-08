import db from "@/lib/db";

export const getAdhesionByAdherentIdAndYear = async (
  adherentId: string,
  annee: number
) => {
  try {
    const adhesion = await db.adhesion.findFirst({
      where: { adherentId, annee },
    });
    return adhesion;
  } catch {
    return null;
  }
};

export const getAdhesionById = async (id: string) => {
  try {
    const adhesion = await db.adhesion.findUnique({
      where: { id },
    });
    return adhesion;
  } catch {
    return null;
  }
};

export const getAllAdhesions = async () => {
  try {
    const adhesion = await db.adhesion.findMany();
    return adhesion;
  } catch {
    return null;
  }
};

export const getCurrentBalanceAdhesionByAdhesionId = async (
  adhesionId: string
) => {
  try {
    const adhesion = await db.adhesion.findFirst({
      where: { id: adhesionId },
      select: { montant_total: true, montant_paye: true },
    });
    if (!adhesion) return null;
    if (adhesion.montant_paye)
      return adhesion.montant_total - adhesion.montant_paye;
    return adhesion.montant_total;
  } catch {
    return null;
  }
};
