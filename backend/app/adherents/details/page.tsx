"use server";

import MainContainer from "@/components/MainContainer";
import SubContainer from "@/components/SubContainer";
import { ActionsBar } from "@/components/adherents/actions-bar";
import IconQualite from "@/components/table/IconQualite";
import { getAdherentById } from "@/data/user-management/adherent";
import { ChevronDown } from "@/public/svgs";

const DetailsAdhesion = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // const adherentId = searchParams.adhesionId;

  // if (!adherentId) return <div>Il manque l'id de l'adhérent</div>;

  // const adherent = await getAdherentById(adherentId);

  // if (!adherent) return <div>Aucun adhérent liée à cet id</div>;

  return (
    <MainContainer className="">
      <ActionsBar />
      <SubContainer className="pb-8 gap-4">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          {/* Main adherent card */}
          <div className="flex flex-col min-w-[290px] w-[320px] max-w-[320px] h-[376px] bg-mainFocus rounded-std border px-4 py-7 border-accent gap-4">
            <div className="flex items-center bg-inactive rounded-full p-3 h-24 w-24 m-auto">
              <div className="flex text-center m-auto text-5xl font-medium text-white">
                JD
              </div>
            </div>
            <div className="flex flex-col items-center m-auto gap-3 text-accent font-semibold ">
              <div className="flex flex-col gap-0">
                <h2 className="text-[22px] mx-auto">
                  M. <span className="text-[28px]">Jose</span>{" "}
                </h2>
                <span className="text-[28px] mx-auto">Lopez</span>
              </div>
              {/* <IconQualite qualite={"adherent"} /> */}
              <span className="text-[18px] font-medium"></span>
            </div>
            <div className="flex flex-row items-center m-auto gap-3 font-semibold">
              <div className="w-12 h-12 flex items-center bg-white rounded-full m-auto">
                <span className="m-auto"></span>
              </div>
              <div className="w-12 h-12 flex items-center bg-white rounded-full m-auto">
                <span className="m-auto"></span>
              </div>
              <div className="w-12 h-12 flex items-center bg-white rounded-full m-auto">
                <span className="m-auto"></span>
              </div>
              <div className="w-12 h-12 flex items-center bg-white rounded-full m-auto">
                <span className="m-auto"></span>
              </div>
            </div>
          </div>
          {/* Contact card */}
          <div className="flex flex-col min-w-[290px] w-[320px] max-w-[320px] bg-mainFocus rounded-std border px-4 py-7 border-accent gap-4">
            <div className="flex">
              <h2 className="text-[22px] text-accent font-semibold">Contact</h2>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Civilité</span>
              <div className="grid">
                <ChevronDown
                  height={24}
                  width={24}
                  className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end  text-accent"
                />
                <select
                  className="appearance-none row-start-1 col-start-1 h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                  aria-label="Civilité"
                  disabled={true}
                >
                  <option value="monsieur">Mr.</option>
                  <option value="madame">Mme.</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Prénom</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Prénom"
                disabled={true}
                value={"Jose"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Nom de naissance</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Nom de naissance"
                disabled={true}
                value={""}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Nom de famille</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Nom de famille"
                disabled={true}
                value={"Lopez"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Date de naissance</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="date"
                aria-label="Date de naissance"
                disabled={true}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Email</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="email"
                aria-label="Email"
                disabled={true}
                value={"jose.lopez@gmail.com"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Tel Portable</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="tel"
                aria-label="Tel Portable"
                disabled={true}
                value={"0632859382"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Tel Fixe</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="tel"
                aria-label="Tel Fixe"
                disabled={true}
                value={"0265859931"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Bulletin par email</span>
              <div className="grid">
                <ChevronDown
                  height={24}
                  width={24}
                  className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end  text-accent"
                />
                <select
                  className="appearance-none row-start-1 col-start-1 h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                  aria-label="Bulletin par email"
                  disabled={true}
                >
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
              </div>
            </div>
          </div>
          {/* Adresse card */}
          <div className="flex flex-col min-w-[290px] w-[320px] max-w-[320px] bg-mainFocus rounded-std border px-4 py-7 border-accent gap-4">
            <div className="flex">
              <h2 className="text-[22px] text-accent font-semibold">Adresse</h2>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Adresse</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Adresse"
                disabled={true}
                value={"45 rue des Érables"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Complement</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Complement"
                disabled={true}
                value={"Bâtiment A, 1er étage"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Ville</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Ville"
                disabled={true}
                value={"Rouen"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Code Postale</span>
              <input
                className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                type="text"
                aria-label="Code Postale"
                disabled={true}
                value={"76000"}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-accent">Pays</span>
              <div className="grid">
                <ChevronDown
                  height={24}
                  width={24}
                  className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end  text-accent"
                />
                <select
                  className="appearance-none row-start-1 col-start-1 h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                  aria-label="Bulletin par email"
                  disabled={true}
                >
                  <option value="France">France</option>
                  <option value="DOM">DOM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="flex flex-col gap-4 w-full">
          {/* Rattachement card */}
          <div className="flex flex-col h-[376px] bg-mainFocus rounded-std border px-4 py-7 border-accent gap-4">
            <div className="flex">
              <h2 className="text-[22px] text-accent font-semibold">
                Rattachement
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex ">
                <div className="flex flex-col w-full">
                  <span className="text-sm text-accent">
                    Section académique
                  </span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Section académique"
                    disabled={true}
                    value={"Rouen"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Établissement</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Établissement"
                    disabled={true}
                    value={"Pierre Corneille"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">
                    Date de rattachement
                  </span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="date"
                    aria-label="Date de rattachement"
                    disabled={true}
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col w-full">
                  <span className="text-sm text-accent">
                    Cotisation annuelle
                  </span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Cotisation annuelle"
                    disabled={true}
                    value={"Retraité"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Corps</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Corps"
                    disabled={true}
                    value={"PEGC"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Échelon</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Échelon"
                    disabled={true}
                    value={"4"}
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col w-full">
                  <span className="text-sm text-accent">Fonction</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Fonction"
                    disabled={true}
                    value={"TD"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Position</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Position"
                    disabled={true}
                    value={"Retraité"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Étalement</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Étalement"
                    disabled={true}
                    value={"Chèque Annuel"}
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col w-full">
                  <span className="text-sm text-accent">Tarif Particulier</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Tarif Particulier"
                    disabled={true}
                    value={"Non"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">
                    Pourcentage de cotisation
                  </span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Pourcentage de cotisation"
                    disabled={true}
                    value={"100%"}
                  />
                </div>
                <div className="flex flex-col w-full ml-2">
                  <span className="text-sm text-accent">Commentaire</span>
                  <input
                    className="h-[30px] rounded-qualite border-[0.5px] border-accent focus:border px-2 disabled:bg-transparent disabled:border-none disabled:px-0"
                    type="text"
                    aria-label="Commentaire"
                    disabled={true}
                    value={"Aucun commentaire"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SubContainer>
    </MainContainer>
  );
};

export default DetailsAdhesion;
