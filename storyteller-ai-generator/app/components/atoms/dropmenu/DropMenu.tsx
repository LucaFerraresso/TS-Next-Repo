import styles from "./DropMenu.module.scss";

interface DropMenuProps {
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropMenu = ({ name, value, options, onChange }: DropMenuProps) => {
  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={name} className={styles.dropdownLabel}>
        {name}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.dropdown}
        aria-label={name} // Aggiunge un attributo aria per l'accessibilità
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropMenu;
