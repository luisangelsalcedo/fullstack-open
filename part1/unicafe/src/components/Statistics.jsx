import { StatisticLine } from './StatisticLine';

export const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const divisor = all || 1;
  const average = (good * 1 + neutral * 0 + bad * -1) / divisor;
  const positive = (100 / divisor) * good;
  // ...
  return (
    <>
      <h2>statistics</h2>
      {!all ? (
        'No Feedback given'
      ) : (
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={`${positive} %`} />
          </tbody>
        </table>
      )}
    </>
  );
};
