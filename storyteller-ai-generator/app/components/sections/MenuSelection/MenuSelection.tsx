import { useState } from "react";
import InputField from "../../atoms/Input/InputField";
import Switcher from "../../atoms/Switcher/Switcher";
import DropMenu from "../../atoms/dropmenu/DropMenu";
import styles from "./MenuSelection.module.scss";

interface FormValues {
  protagonista: string;
  antagonista: string;
  tipoStoria: "bambini" | "adulti";
  genere: string;
}

const MenuSelection = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    protagonista: "",
    antagonista: "",
    tipoStoria: "bambini",
    genere: "horror", // Default genre option
  });
  const [response, setResponse] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

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
    const isValid = Object.values(values).every((value) => value.trim() !== "");
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apikey = process.env.NEXT_PUBLIC_GEMINI_USER_KEY;
    console.log(apikey);

    // Costruisci i dati da inviare alla API
    const data = {
      protagonista: formValues.protagonista,
      antagonista: formValues.antagonista,
      tipoStoria: formValues.tipoStoria,
      genere: formValues.genere,
    };
    console.log(data);

    // Esegui la richiesta POST alla tua API
    const response = await fetch("app/api/getsinglestory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      setResponse(result.story);
    } else {
      console.error("Error fetching story from API");
    }
  };

  return (
    <>
      <form className={styles.menuSelection} onSubmit={handleSubmit}>
        <h1>Menu Selection</h1>
        <div>
          <p>Choose your avatar names</p>
          <InputField
            name="protagonista"
            placeholder="Inserisci nome protagonista:"
            value={formValues.protagonista}
            onChange={handleInputChange}
          />
          <InputField
            name="antagonista"
            placeholder="Inserisci nome antagonista:"
            value={formValues.antagonista}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <DropMenu
            name="genere"
            value={formValues.genere}
            options={[
              "horror",
              "avventura",
              "commedia",
              "comico",
              "fantascienza",
            ]}
            onChange={handleDropdownChange}
          />
        </div>
        <div>
          <Switcher
            checked={formValues.tipoStoria === "adulti"}
            onChange={handleSwitchChange}
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={!isFormValid ? styles.disabledButton : ""}
        >
          Submit
        </button>
      </form>
      {response && (
        <div className={styles.responseContainer}>
          <p>{response}</p>
        </div>
      )}
    </>
  );
};

export default MenuSelection;
