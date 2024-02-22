import { Pie } from '@ant-design/charts';
import { useState, useEffect } from 'react';
const PieChart = ({data}) => {

    const [piedata, setData] = useState([])

    useEffect(() => {
       setData(data)
    }, [])


    const total = piedata.reduce((acc, entry) => acc + entry.value, 0);

    const config = {
        data: piedata,
        angleField: 'value',
        colorField: 'type',
        label: {
          text: 'value',
          style: {
            fontWeight: 'bold',
          },
          formatter: datum => `${(datum / total * 100).toFixed(2)}%`
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
      };


    return <Pie {...config} />;
};

export default PieChart;
