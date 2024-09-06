import { useState } from "react";
import InputField from "../../atoms/Input/InputField";
import Switcher from "../../atoms/Switcher/Switcher";
import DropMenu from "../../atoms/dropmenu/DropMenu";
import styles from "./MenuSelection.module.scss";

interface FormValues {
  protagonista: string;
  antagonista: string;
  tipoStoria: string | boolean;
  genere: string;
}

const MenuSelection = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    protagonista: "",
    antagonista: "",
    tipoStoria: "",
    genere: "",
  });
  const [response, setResponse] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      validateForm(updatedValues);
      return updatedValues;
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        tipoStoria: checked ? "adulti" : "bambini",
      };
      validateForm(updatedValues);
      return updatedValues;
    });
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      validateForm(updatedValues);
      return updatedValues;
    });
  };

  const validateForm = (values: FormValues) => {
    const isValid = Object.values(values).every(
      (value) => value.trim() !== "" && value !== undefined && value !== null
    );
    setIsFormValid(isValid);
  };

  const handlereset = () => {
    setFormValues({
      protagonista: "",
      antagonista: "",
      tipoStoria: "",
      genere: "",
    });
    setIsFormValid(false);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const { protagonista, antagonista, tipoStoria, genere } = formValues;

    try {
      const response = await fetch("/api/getstory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          protagonista,
          antagonista,
          tipoStoria,
          genere,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nel recupero della storia");
      }

      const result = await response.json();
      setResponse(result.story);
    } catch (error) {
      setResponse("Errore durante la generazione della storia.");
    } finally {
      setLoading(false);
    }
    handlereset();
  };

  return (
    <>
      <form className={styles.menuSelection} onSubmit={handleSubmit}>
        <h1>Genera una storia con l'api di GEMINI</h1>
        <p>scegli le opzioni:</p>
        <div className={styles.inputContainer}>
          <InputField
            name="protagonista"
            placeholder="Nome protagonista"
            value={formValues.protagonista}
            onChange={handleInputChange}
          />
          <InputField
            name="antagonista"
            placeholder="Nome antagonista"
            value={formValues.antagonista}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.menuContainer}>
          <DropMenu
            name="genere"
            value={formValues.genere}
            options={[
              "Horror",
              "Avventura",
              "Commedia",
              "Comico",
              "Fantascienza",
            ]}
            onChange={handleDropdownChange}
          />
          <Switcher
            checked={formValues.tipoStoria === "adulti"}
            onChange={handleSwitchChange}
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`${styles.button} ${
            loading
              ? styles.loadingButton
              : isFormValid
              ? styles.activeButton
              : styles.disabledButton
          }`}
        >
          {loading ? "Generando..." : "Genera Storia"}
        </button>
      </form>
      {loading ? (
        <div className={styles.skeleton}></div>
      ) : (
        response && (
          <div className={styles.responseContainer}>
            <p>{response}</p>
          </div>
        )
      )}
    </>
  );
};

export default MenuSelection;
