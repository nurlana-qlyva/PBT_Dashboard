import { Pie } from '@ant-design/plots';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';
import { useYear } from './YearContext';
import useFetch from '../../../hooks/useFetch';

const ToplamHarcananIsGucu = () => {
    const { selectedYear } = useYear();
    const [data, isLoading] = useFetch(`GetToplamHarcananIsGuc?startDate=${selectedYear[0]}&endDate=${selectedYear[1]}`, [selectedYear]);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => ({
            ...item,
            Dakika: item.DAKIKA
        }));
    }

    const config = {
        appendPadding: 10,
        data: formattedData,
        angleField: 'Dakika',
        colorField: 'TANIM',
        radius: .8,
        label: {
            text: (d) => `${d.TANIM}\n${d.Dakika}`,
            position: 'spider',
        },
        legend: false
    };

    const modalConfig = { ...config, radius: .97 }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Toplam Harcanan İş Gücü</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Pie {...config} />}
        </div>
    )
}

export default ToplamHarcananIsGucu;