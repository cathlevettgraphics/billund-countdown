import styles from './ExpiredNotice.module.css';

const ExpiredNotice = () => {
  return (
    <div className={styles.expiredWrapper}>
      <h2 className={styles.expiredHeadline}>Wooooo!</h2>
      <pm className={styles.expiredText}>Cybots have taken off!</pm>
    </div>
  );
};

export default ExpiredNotice;
