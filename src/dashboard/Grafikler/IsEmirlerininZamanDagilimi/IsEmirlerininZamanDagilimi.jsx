import { Line } from '@ant-design/plots';
import { Ayarlar } from './components/Ayarlar';
import { useYear } from './YearContext';
import useFetch from '../../../hooks/useFetch';

const IsEmirlerininZamanDagilimi = () => {
    const { selectedYear } = useYear();
    const [data, isLoading] = useFetch(`GetIsEmirleriByTarih?startDate=${selectedYear[0]}&endDate=${selectedYear[1]}`, [selectedYear]);

    console.log(data)
   
    const config = {
        data,
        xField: 'TARIH',
        yField: 'DEGER',
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
        },
        xAxis: {
            
        },
    };
    
    return (
        <div style={{ width: '100%', height: '100%' }} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emirlerinin Zaman İçerisinde Dağılımı</h3>
                <Ayarlar chart={<Line {...config} />} />
            </div>
            <Line {...config} />
        </div>
    );
}

export default IsEmirlerininZamanDagilimi;

