import { StatisticList, StatisticTitle } from './Statistic.styled';

export const Statistics = ({
  state: { good, neutral, bad },
  total,
  percentage,
}) => {
  return (
    <>
      <StatisticTitle>Statistic</StatisticTitle>
      <StatisticList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total} </li>
        <li>Positive feedback: {percentage}%</li>
      </StatisticList>
    </>
  );
};
