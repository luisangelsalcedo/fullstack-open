import { StatisticLine } from './StatisticLine';

export const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / (all || 1);
  const positive = (100 / (all || 1)) * good;
  // ...
  return (
    <>
      <h2>statistics</h2>
      {!all ? (
        'No Feedback given'
      ) : (
        <div>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={`${positive} %`} />
        </div>
      )}
    </>
  );
};
