import db from "@/lib/db";

export const getAddressByAdherentId = async (adherentId: string) => {
  try {
    const address = await db.adresse.findUnique({
      where: { adherentId },
    });
    return address;
  } catch {
    return null;
  }
};
