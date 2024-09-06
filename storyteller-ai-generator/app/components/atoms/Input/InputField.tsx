import styles from "./InputField.module.scss";

interface InputFieldProps {
  name: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField = ({
  name,
  value,
  placeholder,
  onChange,
  type = "text",
}: InputFieldProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.inputLabel}>
        {name}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={styles.inputField}
      />
    </div>
  );
};

export default InputField;
