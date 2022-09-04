import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <DateTimeDisplay value={days} text={'days'} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} text={'hours'} isDanger={false} />
      <DateTimeDisplay value={minutes} text={'minutes'} isDanger={false} />
      <DateTimeDisplay value={seconds} text={'seconds'} isDanger={false} />
    </>
  );
};

export default ShowCounter;
