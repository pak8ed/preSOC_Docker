import { MagnifyingGlassIcon } from "@/public/svgs";

export const SearchBar = () => {
  return (
    <div className="flex flex-row rounded-[10px] bg-white p-1 border border-accent">
      <input type="search" placeholder="Rechercher..." className="w-64" />
      <div className="bg-accent text-white h-8 w-8 rounded-[10px] flex items-center justify-center">
        <MagnifyingGlassIcon height={24} width={24} />
      </div>
    </div>
  );
};
