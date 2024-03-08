import { UserCircleIcon } from "@/public/svgs";

export const UserButton = () => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="font-bold">Carole</h3>
      <div className="h-12 w-12">
        <UserCircleIcon />
      </div>
    </div>
  );
};
