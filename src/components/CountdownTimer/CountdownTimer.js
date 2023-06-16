import { useCountdown } from '../../hooks/useCountDown';
import ExpiredNotice from '../ExpiredNotice/ExpiredNotice';
import ShowCounter from '../ShowCounter/ShowCounter';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  // Calculate remaining time and render the expired or countdown component
  const timeRemaining = days + hours + minutes + seconds;

  return timeRemaining <= 0 ? (
    <ExpiredNotice />
  ) : (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
