import useCountDown from '../../hooks/useCountDown';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  const timeRemaining = days + hours + minutes + seconds;

  return timeRemaining <= 0 ? (
    <ExpiredNotice />
  ) : (
    <ShowContainer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
