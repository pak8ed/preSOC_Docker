import { Button } from "@/components/ui/button";
import { FunnelIcon, UserPlusIcon } from "@/public/svgs";

export const ActionsBar = () => {
  return (
    <div className="fixed z-10 top-[101px] px-[10px] h-[74px] w-[calc(100vw-236px-22px)] bg-white rounded-std shadow-bar flex flex-row items-center justify-between">
      <Button>
        <UserPlusIcon height={24} width={24} />
        Nouvel adhérent
      </Button>
      <Button>
        <FunnelIcon height={24} width={24} />
        Filtres
      </Button>
    </div>
  );
};
