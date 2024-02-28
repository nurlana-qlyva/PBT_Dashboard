import { Pie } from '@ant-design/plots';
import { Spin } from 'antd';
import { Ayarlar } from '../components/Ayarlar';

const ToplamHarcananIsGucu = () => {
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: .7,
        label: {
            text: (d) => `${d.type}\n${d.value}`,
            position: 'spider',
        },
        legend: false
    };

    const modalConfig = {...config, radius: .97}

    return (
        <div style={{width: '100%', height: '100%'}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Toplam Harcanan İş Gücü</h3>
                <Ayarlar chart={<Pie {...modalConfig} />} />
            </div>
            <Pie {...config}/>
        </div>
    )
}

export default ToplamHarcananIsGucu;