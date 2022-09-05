import styles from './DateTimeDisplay.module.css';

const DateTimeDisplay = ({ value, text, isFinalCountdown }) => {
  return (
    <div className={styles.timeWrapper}>
      <h2
        className={
          isFinalCountdown ? styles.finalCountdown : styles.timeDisplayNumber
        }
      >
        {value}
      </h2>
      <p className={styles.timeDisplayText}>{text}</p>
    </div>
  );
};

export default DateTimeDisplay;
