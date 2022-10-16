import { StatisticsList } from 'components/StatisticsList/StaticticsList';
import { Fragment } from 'react';
import { StatisticTitle } from './Statistics.styled';

export const Statistics = ({ state }) => {
  return (
    <Fragment>
      <StatisticTitle>Statistics</StatisticTitle>
      <StatisticsList stateElements={state}></StatisticsList>
    </Fragment>
  );
};
