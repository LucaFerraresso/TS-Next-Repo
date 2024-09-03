import { Interface } from "readline";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, onClick } = props;
  return (
    <>
      <div>
        <button onClick={onClick} className={styles.navbarButton}>
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
