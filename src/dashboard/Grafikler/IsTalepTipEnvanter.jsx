import useFetch from '../useFetch'
import { Pie } from '@ant-design/charts';

const IsTalepTipEnvanter = () => {
    const [data] = useFetch("GetIsTalepTipEnvanter?ID=2")

    const total = data.reduce((acc, entry) => acc + entry.TALEP_SAYISI, 0);

    const config = {
        data,
        angleField: 'TALEP_SAYISI',
        colorField: 'TALEP_TIPI',
        label: {
            text: 'TALEP_SAYISI',
            style: {
                fontWeight: 'bold',
            },
            formatter: datum => `${(datum / total * 100).toFixed(1)}%`
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };

    return <Pie {...config} />
}

export default IsTalepTipEnvanter;