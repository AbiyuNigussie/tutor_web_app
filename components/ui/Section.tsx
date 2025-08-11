import { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Props = HTMLAttributes<HTMLElement> & { contained?: boolean };

export default function Section({
  className,
  contained = true,
  ...props
}: Props) {
  return (
    <section
      className={cn(
        contained ? "max-w-screen-2xl mx-auto px-4 md:px-6" : "",
        className
      )}
      {...props}
    />
  );
}
