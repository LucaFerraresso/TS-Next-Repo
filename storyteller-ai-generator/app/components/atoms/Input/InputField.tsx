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
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={styles.inputField}
    />
  );
};

export default InputField;
