export interface ButtonProps {
  variant: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  fullWidth?: boolean;
  loading?: boolean;
}

export const variantClasses = {
  primary:
    "bg-orange-400 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl",
  secondary:
    "bg-white text-black font-medium hover:text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl",
};

export const defaultStyles =
  "flex items-center gap-x-2 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200";
