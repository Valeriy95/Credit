import { useState } from "react";
import "./Input.css";

interface InputProps {
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
}

const Input: React.FC<InputProps> = ({ setInputValue }) => {
  const [rawValue, setRawValue] = useState("");

  const formatNumber = (value: string) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s|₽/g, "");

    if (value === "") {
      setRawValue("");
      setInputValue(0);
      return;
    }

    const formattedValue = formatNumber(value);
    setRawValue(formattedValue);
    setInputValue(Number(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      const input = e.target as HTMLInputElement;
      const cursorPos = input.selectionStart;
      if (cursorPos === input.value.length) {
        e.preventDefault();
        const newValue = rawValue.slice(0, -1);
        setRawValue(newValue);
        setInputValue(newValue ? Number(newValue.replace(/\s/g, "")) : 0);
      }
    }
  };

  return (
    <div className="input-container">
      <label className="input-label">Ваша сумма кредита</label>
      <input
        type="text"
        className="text-input"
        value={rawValue ? `${rawValue} ₽` : ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите сумму"
      />
    </div>
  );
};

export default Input;
