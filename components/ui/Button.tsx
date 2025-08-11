import { ButtonHTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none";
const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3",
};
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "text-[#555] hover:text-[#111]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
