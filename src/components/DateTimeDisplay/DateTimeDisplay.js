import styles from './DateTimeDisplay.module.css';

const DateTimeDisplay = ({ value, text, isDanger }) => {
  return (
    <div className={styles.timeWrapper}>
      <h2 className={isDanger ? styles.danger : styles.timeDisplayNumber}>
        {value}
      </h2>
      <p className={styles.timeDisplayText}>{text}</p>
    </div>
  );
};

export default DateTimeDisplay;
