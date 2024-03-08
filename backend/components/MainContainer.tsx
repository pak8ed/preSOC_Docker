import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

export default function MainContainer({
  as: Comp = "div",
  className,
  id,
  children,
}: ContainerProps) {
  return (
    <Comp className={clsx("flex flex-col gap-6 w-full", className)} id={id}>
      {children}
    </Comp>
  );
}
