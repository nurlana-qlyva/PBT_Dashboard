import { useEffect } from "react"
import { Column } from '@ant-design/plots';
import { Ayarlar } from './components/Ayarlar';
import { Spin } from 'antd';
import useFetch from '../../../hooks/useFetch';
import { useDate } from '../../../DateContext';
import { usePersonel } from './PersonelContext';

const PersonelIsGucu = () => {
    const { selectedDate } = useDate();
    const { personels, setPersonels } = usePersonel()
    const [data, isLoading] = useFetch(`GetPersonelBazindaHarcananGuc?startDate=${selectedDate?.personel_is_gucu_zaman[0]}&endDate=${selectedDate?.personel_is_gucu_zaman[1]}`, [selectedDate.personel_is_gucu_zaman]);

    useEffect(() => {
        const personelData = []
        data.map(item => personelData.push(item.ISIM))
        setPersonels(personelData)
    }, [])

    console.log(personels)



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
        label: {
            text: (originData) => {
                const val = parseFloat(originData.ISIM);
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


