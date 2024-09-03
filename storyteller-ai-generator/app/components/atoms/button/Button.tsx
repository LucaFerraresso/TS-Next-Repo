"use client";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Aggiunta tipizzazione per il tipo di bottone
  ariaLabel?: string; // Aggiunta tipizzazione per aria-label per migliorare l'accessibilità
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  ariaLabel,
}) => {
  return (
    <>
      <div>
        <button
          type={type}
          onClick={onClick}
          className={styles.navbarButton}
          aria-label={ariaLabel || label} // Uso aria-label per migliorare l'accessibilità
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
