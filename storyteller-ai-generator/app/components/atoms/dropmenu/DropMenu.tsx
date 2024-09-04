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
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={styles.dropdown}
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
