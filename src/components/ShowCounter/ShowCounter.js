import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <DateTimeDisplay
        value={days < 10 ? `0${days}` : days}
        text={days === 1 ? 'day' : 'days'}
        isFinalCountdown={days <= 3}
      />
      <DateTimeDisplay
        value={hours < 10 ? `0${hours}` : hours}
        text={hours === 1 ? 'hour' : 'hours'}
        isFinalCountdown={false}
      />
      <DateTimeDisplay
        value={minutes < 10 ? `0${minutes}` : minutes}
        text={minutes === 1 ? 'minute' : 'minutes'}
        isFinalCountdown={false}
      />
      <DateTimeDisplay
        value={seconds < 10 ? `0${seconds}` : seconds}
        text={seconds === 1 ? 'second' : 'seconds'}
        isFinalCountdown={false}
      />
    </>
  );
};

export default ShowCounter;
