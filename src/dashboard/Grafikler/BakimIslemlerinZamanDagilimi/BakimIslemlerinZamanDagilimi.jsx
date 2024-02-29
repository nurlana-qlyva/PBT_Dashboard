import { Line } from '@ant-design/plots';
import { Ayarlar } from '../components/Ayarlar';

const BakimIslemlerinZamanDagilimi = () => {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
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
    };
    return (
        <div style={{width: '100%', height: '100%'}} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>İş Emirlerinin Zaman İçerisinde Dağılımı</h3>
                <Ayarlar chart={<Line {...config} />} />
            </div>
            <Line {...config} />
        </div>
    );
}

export default BakimIslemlerinZamanDagilimi;

