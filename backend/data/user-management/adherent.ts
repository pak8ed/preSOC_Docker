import db from "@/lib/db";

export const getEveryOneInDB = async () => {
  try {
    const everyone = db.adherent.findMany();
    return everyone;
  } catch {
    return null;
  }
};

export const getAllAdherentsAndAncienAdherents = async () => {
  try {
    const adherents = db.adherent.findMany({
      where: { OR: [{ qualite: "Adherent" }, { qualite: "AncienAdherent" }] },
    });
    return adherents;
  } catch {
    return null;
  }
};

export const getAllAdherents = async () => {
  try {
    const adherents = db.adherent.findMany({
      where: { qualite: "Adherent" },
    });
    return adherents;
  } catch {
    return null;
  }
};

export const getAdherentByEmail = async (email: string) => {
  try {
    const user = db.adherent.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};

export const getAdherentByTel = async (tel: string) => {
  try {
    const user = db.adherent.findUnique({
      where: { tel },
    });
    return user;
  } catch {
    return null;
  }
};

export const getAdherentByCode = async (code_adherent: string) => {
  try {
    const user = db.adherent.findUnique({
      where: { code_adherent },
    });
    return user;
  } catch {
    return null;
  }
};

export const getAdherentById = async (id: string) => {
  try {
    const user = db.adherent.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
