"use server";

import MainContainer from "@/components/MainContainer";
import { TableWrapper } from "@/components/table/TableWrapper";
import { Button } from "@/components/ui/button";
import { getAllAdherentsAndAncienAdherents } from "@/data/user-management/adherent";
import { UserPlusIcon } from "@/public/svgs";

const Adherents = async () => {
  const data = await getAllAdherentsAndAncienAdherents();

  if (!data) return <div>Une erreur s&apos;est produite</div>;

  if (data?.length === 0) return <div>Aucun adhérents dans la table</div>;

  return (
    <MainContainer>
      <TableWrapper data={data}>
        <Button>
          <UserPlusIcon height={24} width={24} />
          Nouvel adhérent
        </Button>
      </TableWrapper>
    </MainContainer>
  );
};

export default Adherents;
