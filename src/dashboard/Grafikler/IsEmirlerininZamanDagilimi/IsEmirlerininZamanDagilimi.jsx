import { Line, Spin } from '@ant-design/plots';
import { Ayarlar } from './components/Ayarlar';
import useFetch from '../../../hooks/useFetch';
import { useDate } from './DateContext';

const IsEmirlerininZamanDagilimi = () => {
    const { selectedDate } = useDate();
    const [data, isLoading] = useFetch(`GetIsEmirleriByTarih?startDate=${selectedDate[0]}&endDate=${selectedDate[1]}`, [selectedDate]);

    let formattedData = [];

    if (data) {
        formattedData = data.map(item => {

            item.TARIH = item.TARIH.split("T")[0]
            return ({
                ...item,
                "Tarih": item.TARIH,
                "Değer": item.DEGER
            })
        });
    }

    const config = {
        data: formattedData,
        xField: 'Tarih',
        yField: 'Değer',
        point: {
            shapeField: 'square',
            sizeField: 4,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        },
        style: {
            lineWidth: 2,
        }
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emirlerinin Zaman İçerisinde Dağılımı</h3>
                <Ayarlar chart={<Line {...config} />} />
            </div>
            {isLoading ? <Spin size="large" /> : <Line {...config} />}
            <div id='over'></div>
        </div>
    );
}

export default IsEmirlerininZamanDagilimi;

