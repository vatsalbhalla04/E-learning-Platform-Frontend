import {
  defaultStyles,
  variantClasses,
  type ButtonProps,
} from "../../Props/ButtonProps";

export default function ButtonComponent({
  text,
  onClick,
  variant,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
      <button
        onClick={onClick}
        type="button"
        disabled={loading}
        className={`${variantClasses[variant]} ${defaultStyles} ${
          fullWidth ? "w-full flex justify-center" : ""
        } ${loading ? "opacity-45 cursor-default" : ""}`}
      aria-busy = {loading}
      >
        {text}
      </button>
  );
}
