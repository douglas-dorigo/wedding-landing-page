import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  onClick,
  disabled,
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
