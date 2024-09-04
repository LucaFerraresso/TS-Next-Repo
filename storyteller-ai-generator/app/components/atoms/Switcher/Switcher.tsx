"use client";
import styles from "./Switcher.module.scss";

interface SwitcherProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switcher = ({ checked, onChange }: SwitcherProps) => {
  const handleSwitch = () => {
    onChange(!checked);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleSwitch} />
      <span className={styles.slider}></span>
      <span className={styles.label}>{checked ? "Adulti" : "Bambini"}</span>
    </label>
  );
};

export default Switcher;
