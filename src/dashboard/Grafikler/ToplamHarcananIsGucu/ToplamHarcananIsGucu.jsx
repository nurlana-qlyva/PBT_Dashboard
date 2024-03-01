import { Pie } from '@ant-design/plots';
import { Spin } from 'antd';
import { Ayarlar } from './components/Ayarlar';
import useFetch from '../../../hooks/useFetch';
import { useDate } from './DateContext';

const ToplamHarcananIsGucu = () => {
    const { selectedDate } = useDate();
    const [data, isLoading] = useFetch(`GetToplamHarcananIsGuc?startDate=${selectedDate[0]}&endDate=${selectedDate[1]}`, [selectedDate]);
    
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