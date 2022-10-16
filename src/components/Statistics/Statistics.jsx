import { StatisticsList } from 'components/StatisticsList/StaticticsList';
import { Fragment } from 'react';
import { StatisticTitle } from './Statistics.styled';

export const Statistics = () => {
  return (
    <Fragment>
      <StatisticTitle>Statistics</StatisticTitle>
      <StatisticsList></StatisticsList>
    </Fragment>
  );
};
