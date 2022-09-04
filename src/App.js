import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
  const currentTimeInMilliseconds = new Date().getTime();
  const billundDeparture = new Date('September 12 2022 07:20:00').getTime();
  // Calculate the difference in time to the flight from now
  const differenceInTimeFromNow = billundDeparture - currentTimeInMilliseconds;
  // Calculate the time in milliseconds until the flight
  const displayTimeToFlight =
    currentTimeInMilliseconds + differenceInTimeFromNow;
  return (
    <>
      <h1>Billund ... are you ready for Cybots?!</h1>
      <CountdownTimer targetDate={displayTimeToFlight} />
    </>
  );
}

export default App;
