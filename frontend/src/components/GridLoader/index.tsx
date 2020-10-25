import React, { ReactElement } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles.css';

const GridLoader: React.FC = () => {

  const randomBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }

  const elements = 20
  const components: ReactElement[] = []
  for (let index = 0; index < elements; index++) {
    components.push(
      <SkeletonTheme key={index} color="#cacaca" highlightColor="#dad9d9">
        <div><Skeleton height={randomBetween(180, 500)} /></div>
      </SkeletonTheme>
    )
  }

  return (<div className="grid">{components}</div>)
};

export default GridLoader
