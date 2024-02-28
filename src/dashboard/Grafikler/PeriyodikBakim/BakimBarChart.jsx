import useFetch from '../../../hooks/useFetch'
import { Column } from '@ant-design/plots';
import { Ayarlar } from '../components/Ayarlar';



const BakimBarChart = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json',
        },
        xField: 'letter',
        yField: 'frequency',
        label: {
            text: (d) => `${(d.frequency * 100).toFixed(1)}%`,
            textBaseline: 'bottom',
        },
        axis: {
            y: {
                labelFormatter: '.0%',
            },
        },
        style: {
            // 圆角样式
            radiusTopLeft: 10,
            radiusTopRight: 10,
        },
    };
    return (
        <div style={{width: '100%', height: '100%'}} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Periyodik Bakımlar Grafiği</h3>
                <Ayarlar chart={<Column {...config} />} />
            </div>
            <Column {...config} />
        </div>
    );
}

export default BakimBarChart

