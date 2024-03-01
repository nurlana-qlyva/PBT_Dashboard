import { Column } from '@ant-design/plots';
import { Ayarlar } from './components/Ayarlar';
import { useYear } from './YearContext';
import { Spin } from 'antd';
import useFetch from '../../../hooks/useFetch';

const PersonelIsGucu = () => {
    const { selectedYear } = useYear();
    const [data, isLoading] = useFetch(`GetPersonelBazindaHarcananGuc?startDate=${selectedYear[0]}&endDate=${selectedYear[1]}`, [selectedYear]);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            Dakika: item.DAKIKA
        }));
    }

    const config = {
        data: formattedData,
        xField: 'ISIM',
        yField: 'Dakika',
        style: {
            fill: ({ type }) => {
                if (type === '10-30分' || type === '30+分') {
                    return '#22CBCC';
                }
                return '#2989FF';
            },
        },
        label: {
            text: (originData) => {
                const val = parseFloat(originData.value);
                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
                return '';
            },
            offset: 10,
        },
        legend: false,
    };

    return (
        <div style={{ width: '100%', height: '100%' }} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Personel Bazında Harcanan İş Gücü</h3>
                <Ayarlar chart={<Column {...config} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Column {...config} />}
        </div>
    );
}

export default PersonelIsGucu;


