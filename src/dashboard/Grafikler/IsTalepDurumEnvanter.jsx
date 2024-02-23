import useFetch from '../useFetch'
import { Pie } from '@ant-design/charts';

const IsTalepDurumEnvanter = () => {
    const [data] = useFetch("GetIsTalepDurumEnvanter?ID=2")

    const total = data.reduce((acc, entry) => acc + entry.IS_TALEP_SAYISI, 0);

    const config = {
        data,
        angleField: 'IS_TALEP_SAYISI',
        colorField: 'IS_TALEP_SAYISI',
        label: {
            text: 'IS_TALEP_SAYISI',
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

export default IsTalepDurumEnvanter;