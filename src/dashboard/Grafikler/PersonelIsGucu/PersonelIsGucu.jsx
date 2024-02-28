import { Column } from '@ant-design/plots';
import { Ayarlar } from '../components/Ayarlar';

const PersonelIsGucu = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json',
        },
        xField: '城市',
        yField: '销售额',
        scrollbar: {
            x: {
                ratio: 0.05,
            },
        },
    };
    return (
        <div style={{width: '100%', height: '100%'}} className='column'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Personel Bazında Harcanan İş Gücü</h3>
                <Ayarlar chart={<Column {...config} />} />
            </div>
            <Column {...config} />
        </div>
    );
}

export default PersonelIsGucu;


