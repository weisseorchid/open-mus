import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type StackSpace = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  direction?: "col" | "row";
  space?: StackSpace;
  wrap?: boolean;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const Stack = forwardRef<HTMLElement, StackProps>(function Stack(
  {
    as: Component = "div",
    direction = "col",
    space = "md",
    wrap = false,
    align,
    justify,
    className,
    ...rest
  },
  ref,
) {
  const alignClass = align
    ? (
        align === "start"
          ? "items-start"
          : align === "center"
            ? "items-center"
            : align === "end"
              ? "items-end"
              : align === "stretch"
                ? "items-stretch"
                : "items-baseline"
      )
    : undefined;

  const justifyClass = justify
    ? (
        justify === "start"
          ? "justify-start"
          : justify === "center"
            ? "justify-center"
            : justify === "end"
              ? "justify-end"
              : justify === "between"
                ? "justify-between"
                : justify === "around"
                  ? "justify-around"
                  : "justify-evenly"
      )
    : undefined;

  return (
    <Component
      ref={ref as never}
      className={cn(
        "stack",
        direction === "col" ? "flex-col" : "flex-row",
        wrap && "flex-wrap",
        alignClass,
        justifyClass,
        className,
      )}
      data-direction={direction}
      data-space={space}
      data-wrap={wrap ? "true" : undefined}
      {...rest}
    />
  );
});

export default Stack;


