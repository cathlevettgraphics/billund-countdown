import './../src/generics.css';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
  const currentTimeInMilliseconds = new Date().getTime();
  const billundDeparture = new Date('June 25 2023 17:30:00').getTime();
  // Calculate the difference in time to the flight from now
  const differenceInTimeFromNow = billundDeparture - currentTimeInMilliseconds;
  // Calculate the time in milliseconds until the flight
  const displayTimeToFlight =
    currentTimeInMilliseconds + differenceInTimeFromNow;
  return (
    <div className="wrapper">
      <div className="countdownWrapper">
        <CountdownTimer targetDate={displayTimeToFlight} />
      </div>
      <div>
        <h1 className="headline">Billund ... are you ready for Cybots?!</h1>
        <p className="tourDate">25-28 June 2023</p>
      </div>
    </div>
  );
}

export default App;
