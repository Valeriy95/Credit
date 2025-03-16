import "./MonthsButton.css";

interface MonthsButtonProps {
  months: number[];
  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
}

const MonthsButton: React.FC<MonthsButtonProps> = ({
  months,
  selectedMonth,
  setSelectedMonth,
}) => {

  return (
    <div className="popup-months-container">
      <h4 className="popup-months-title">Количество месяцев?</h4>
      <div className="popup-months-btn-container">
        {months.map((month) => (
          <button
            key={month}
            className={`popup-month-btn ${
              selectedMonth === month ? "active" : ""
            }`}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthsButton;
