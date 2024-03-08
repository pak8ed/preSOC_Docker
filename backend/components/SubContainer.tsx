import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export default function SubContainer({
  as: Comp = "div",
  className,
  id,
  children,
}: ContainerProps) {
  return (
    <Comp
      className={clsx("w-full flex px-[10px] mx-auto mt-[100px]", className)}
      id={id}
    >
      {children}
    </Comp>
  );
}
