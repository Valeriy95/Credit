import "./StartPage.css";

interface StartPageProps {
  setIsStartPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartPage: React.FC<StartPageProps> = ({ setIsStartPage }) => {
  return (
    <div className="start-page-container">
      <button className="start-page-btn" onClick={() => setIsStartPage(false)}>
        Расчет платежей
      </button>
    </div>
  );
};

export default StartPage;
