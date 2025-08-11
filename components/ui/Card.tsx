import { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export default function Card({ className, padded = true, ...props }: Props) {
  return (
    <div
      className={cn("rounded-xl border shadow-sm", padded && "p-6", className)}
      {...props}
    />
  );
}
