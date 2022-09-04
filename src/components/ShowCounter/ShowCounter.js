import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <DateTimeDisplay
        value={days < 10 ? `0${days}` : days}
        text={days < 1 ? 'day' : 'days'}
        isDanger={days <= 3}
      />
      <DateTimeDisplay
        value={hours < 10 ? `0${hours}` : hours}
        text={'hours'}
        isDanger={false}
      />
      <DateTimeDisplay
        value={minutes < 10 ? `0${minutes}` : minutes}
        text={'minutes'}
        isDanger={false}
      />
      <DateTimeDisplay
        value={seconds < 10 ? `0${seconds}` : seconds}
        text={'seconds'}
        isDanger={false}
      />
    </>
  );
};

export default ShowCounter;
