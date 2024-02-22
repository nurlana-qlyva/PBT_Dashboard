import { Bar } from '@ant-design/plots';
import { useEffect, useState } from 'react';



const EnvanterBarChart = ({data}) => {
    const[chartdata, setData] = useState([])

    useEffect(() => setData(data.MAKINE_TIP_ENVANTER), [data.MAKINE_TIP_ENVANTER])

    const config = {
        data: chartdata,
        xField: 'MAKINE_TIPI',
        yField: 'MAKINE_SAYISI',
        paddingRight: 80,
        style: {
            maxWidth: 25,
        },
        markBackground: {
            label: {
                text: ({ originData }) => {
                    // return `${(originData.MAKINE_SAYISI / 1000) * 100}% | ${originData.MAKINE_SAYISI}`;
                    return originData.MAKINE_SAYISI;
                },
                position: 'right',
                dx: 40,
                style: {
                    fill: '#aaa',
                    fillOpacity: 1,
                    fontSize: 14,
                },
            },
            style: {
                fill: '#eee',
            },
        },
        scale: {
            y: {
                domain: [0, 20],
            },
        },
        axis: {
            x: {
                tick: false,
                title: false,
            },
            y: {
                grid: false,
                tick: false,
                label: false,
                title: false,
            },
        },
        interaction: {
            elementHighlightByColor: true,
        },
    };
    return <Bar {...config} />;
}

export default EnvanterBarChart