import { useState, useEffect } from 'react';
// import { Column } from '@ant-design/plots';
import { RadialBar } from '@ant-design/plots';

const Chart = ({data}) => {

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    radius: 1,
    innerRadius: 0.2,
    tooltip: {
      items: ['star'],
    },
  };

  return <RadialBar {...config} />;
};

export default Chart
