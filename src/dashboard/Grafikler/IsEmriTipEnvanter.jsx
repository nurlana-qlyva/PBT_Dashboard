import useFetch from '../useFetch'
import { Pie } from '@ant-design/charts';

const IsEmriTipEnvanter = () => {
    const [data] = useFetch("GetIsEmriTipEnvanter?ID=2")

    const total = data.reduce((acc, entry) => acc + entry.ISEMRI_SAYISI, 0);

    const config = {
        data,
        angleField: 'ISEMRI_SAYISI',
        colorField: 'ISEMRI_TIPI',
        label: {
            text: 'ISEMRI_SAYISI',
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

export default IsEmriTipEnvanter;