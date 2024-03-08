import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export default function ActionsBarContainer({
  as: Comp = "div",
  className,
  id,
  children,
}: ContainerProps) {
  return (
    <Comp
      className={clsx(
        "fixed z-10 top-[101px] px-[10px] h-[74px] w-[calc(100vw-236px-22px)] bg-white rounded-std shadow-bar flex flex-row items-center justify-between",
        className
      )}
      id={id}
    >
      {children}
    </Comp>
  );
}
