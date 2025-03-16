import { useEffect, useState } from "react";
import "./Popup.css";
import Result from "../Result/Result";
import MonthsButton from "../MonthsButton/MonthsButton";
import Input from "../Input/Input";

interface PopupProps {
  setIsStartPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ setIsStartPage }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(12);

  const [inputValue, setInputValue] = useState<number>(0);

  const [isResult, setIsResult] = useState(false);

  const [totalAmount, setTotalAmount] = useState<number>(0);

  const months = [12, 24, 36, 48];

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains("popup-wrapper")) {
      setIsStartPage(true);
    }
  };

  const handleCalculate = () => {
    setInputValue(inputValue);
    setIsResult(true);
    const result = inputValue / selectedMonth;
    setTotalAmount(result);
    console.log(inputValue);
  };

  useEffect(() => {
    if (inputValue > 0 && selectedMonth > 0) {
      setTotalAmount(inputValue / selectedMonth);
    } else {
      setTotalAmount(0);
    }
  }, [inputValue, selectedMonth]);

  return (
    <div className="popup-wrapper" onClick={handleClickOutside}>
      <div
        className={`popup-container ${
          isResult === true ? "popup-container-result" : ""
        }`}
      >
        <div className="popup-close-icon-container">
          <div
            className="popup-close-icon"
            onClick={() => setIsStartPage(true)}
          ></div>
        </div>
        <h1 className="popup-title">Платежи по кредиту</h1>
        <p className="popup-text">
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить. <br />
          Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
          лучше спланировать свои финансы.{" "}
        </p>{" "}
        <Input setInputValue={setInputValue} />
        <button className="popup-btn" onClick={handleCalculate}>
          Рассчитать
        </button>
        <MonthsButton
          months={months}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        {isResult ? (
          <Result totalAmount={totalAmount} />
        ) : null}
        <button
          className={`popup-add-btn ${
            isResult === true ? "popup-add-btn-result" : ""
          }`}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Popup;
