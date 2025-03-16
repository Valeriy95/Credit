import { useEffect, useState } from "react";
import "./Result.css";

interface ResultProps {
  totalAmount: number;
}

const Result: React.FC<ResultProps> = ({ totalAmount }) => {
  const [selectedOption, setSelectedOption] = useState<"year" | "month">(
    "month"
  );
  const [displayAmount, setDisplayAmount] = useState(totalAmount);

  useEffect(() => {
    if (selectedOption === "year") {
      setDisplayAmount(totalAmount * 12);
    } else {
      setDisplayAmount(totalAmount);
    }
  }, [selectedOption, totalAmount]);

  return (
    <div className="result-container">
      <h4 className="result-title">Итого ваш платеж по кредиту:</h4>
      <div className="result-btn-container">
        <button
          className={`result-btn ${selectedOption === "year" ? "active" : ""}`}
          onClick={() => setSelectedOption("year")}
        >
          в год
        </button>
        <button
          className={`result-btn ${selectedOption === "month" ? "active" : ""}`}
          onClick={() => setSelectedOption("month")}
        >
          в месяц
        </button>
      </div>
      <p className="result-amount">{displayAmount.toLocaleString()} рублей</p>
    </div>
  );
};

export default Result;
