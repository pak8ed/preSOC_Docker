import db from "@/lib/db";

export const getPaiementsByAdhesionId = async (adhesionId: string) => {
  try {
    const paiements = await db.paiement.findMany({
      where: { adhesionId },
    });
    return paiements;
  } catch {
    return null;
  }
};

export const getPaiementById = async (paimentId: string) => {
  try {
    const paiement = await db.paiement.findUnique({
      where: { id: paimentId },
    });
    return paiement;
  } catch {
    return null;
  }
};
